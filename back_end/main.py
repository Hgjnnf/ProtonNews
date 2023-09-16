from fastapi import FastAPI

if __name__ == "main":
    app = FastAPI()

@app.get("/")
def get_root():
    return {"Hello" : "World"}