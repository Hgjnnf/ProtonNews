from dotenv import load_dotenv
from fastapi import FastAPI
from urllib.parse import quote
import requests
import os

load_dotenv()

news_data_api_key = os.getenv("NEWS_DATA_API_KEY")
news_data_api = "https://newsdata.io/api/1/news?apikey=" + news_data_api_key

if __name__ == "main":
    app = FastAPI()

@app.get("/")
def get_root():
    return {"Hello" : "World"}

@app.get("/news")
async def get_news(limit: int = 5, query: str = " "):
    encoded_query = quote(query)
    res = requests.get(news_data_api + '&q=' + encoded_query)
    return res.json()
