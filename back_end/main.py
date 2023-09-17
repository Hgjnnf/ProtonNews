import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from urllib.parse import quote
from typing import List
import requests
from model import Article
from database import session, engine
import cohere
import os
from sqlalchemy.sql import func
from sqlalchemy import text, select
from cohere.responses.classify import Example
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

news_data_api_key = os.getenv("NEWS_DATA_API_KEY")
news_data_api = "https://newsdata.io/api/1/news?apikey=" + news_data_api_key
cohere_api_key = os.getenv("COHERE_API_KEY")

if __name__ == "main":
    app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def get_root():
    return {"Hello" : "World"}

@app.get("/news")
def fetch_database(limit: int = 5, query : str = ""):
    """Fetch data from the database with given query """
    qry_object = session.query(Article).filter(Article.primary_kw.like(f"%{query.lower()}%"))

    return qry_object.all()

co = cohere.Client(cohere_api_key)
examples=[
  Example("Now, New Delhi Station To Airport In Just 15 Minutes By Metro", "positive"), 
  Example("Evidence of 'Once-in-a-Lifetime Cosmic Event' Turns Out to Be the Work of Two Bored Friends", "positive"), 
  Example("\"Finally, we're here\": Construction officially begins on new Vancouver Art Gallery", "positive"), 
  Example("World Cup bronze medallist Canada moves to No. 6 in FIBA men's world rankings", "positive"), 
  Example("Sports activities will step up in Benue, says Commissioner", "positive"), 
  Example("Man charged over death of pedestrian who was hit by Audi in Cowdenbeath, Fife, Police Scotland say", "negative"), 
  Example("Locals in stitches after public proposal on roundabout goes horribly wrong", "negative"), 
  Example("Flights, ferries cancelled Saturday as post-tropical storm Lee rolls into Maritimes", "negative"), 
  Example("China's Slumping Economy: What the Latest Numbers Are Signaling", "negative"), 
  Example("\"Unhappy Hour\": U.K. Pub Chains Adopt Surge Pricing for Pints", "negative"), 
  Example("Horse racing tips: Templegate NAP has dropped nicely down the weights and is on a track that will suit", "neutral"), 
  Example("Starmer meets Justin Trudeau during Montreal trip", "neutral"), 
  Example("We asked every school district in B.C. how many portables they have. Here's what we found.", "neutral"), 
  Example("Arm\'s I.P.O. Delivers a Big Test for the Markets", "neutral"), 
  Example("Tech Leaders Gather for an A.I. Week in Washington", "neutral"),
]

@app.get("/scrape")
async def get_news(limit: int = 5, query: str = " "):
    encoded_query = quote(query.lower())
    res = requests.get(news_data_api + '&q=' + encoded_query + '&language=en')
    json = res.json()

    articles = json['results']
    arr = []

    i, cnt = 0, 0
    while i < len(articles) and cnt < limit:
        obj = articles[i]
        qry_object = session.query(Article).where(Article.title == obj['title'])

        if qry_object.first() is None:
            classifyRes = co.classify(
                model='large',
                inputs=[obj['title']],
                examples=examples
            )

            rating = classifyRes.classifications[0].labels['positive'].confidence
            rating = round(rating * 100)

            if rating > 50:
                article = Article(
                    title = obj['title'],
                    date = obj['pubDate'],
                    url = obj['link'],
                    overview = co.summarize(text=obj['content']).summary,
                    image_url = obj['image_url'],
                    keywords = obj['keywords'],
                    rating = rating,
                    primary_kw = query.lower()
                )

                arr.append(article)

                cnt += 1
        i += 1

    session.add_all(arr)
    session.commit()

    return {"response": "success"}
