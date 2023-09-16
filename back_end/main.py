import os
from dotenv import load_dotenv
from fastapi import FastAPI
from urllib.parse import quote
from typing import List
import requests

from database import Session
import model

load_dotenv()

news_data_api_key = os.getenv("NEWS_DATA_API_KEY")
news_data_api = "https://newsdata.io/api/1/news?apikey=" + news_data_api_key

if __name__ == "main":
    app = FastAPI()
    db = Session()

@app.get("/")
def get_root():
    return {"Hello" : "World"}

def fetch_database(limit: int = 5, query : str = "") -> List[model.Article]:
    """Fetch data from the database with given query """
    fetched_articles = []
    fetched_res = db.query(model.Keyword).filter(model.Keyword.keyword == query).first()
    if fetched_res is None:
        return []
    articles_id = fetched_res.articles
    for id in articles_id:
        if limit == 0: # limit the number of results
            break
        fetched_articles.append(db.query(model.Article).get(id))
        limit -= 1
    return fetched_articles

@app.get("/news")
async def get_news(limit: int = 5, query: str = " "):
    data = fetch_database(limit, query)
    if len(data) > 0:
        return data
    encoded_query = quote(query)
    res = requests.get(news_data_api + '&q=' + encoded_query)
    return res.json()
