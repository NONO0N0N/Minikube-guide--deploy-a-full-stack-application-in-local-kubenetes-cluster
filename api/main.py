from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import requests
import json

import datetime as dt

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/time")
async def root():
    return dt.datetime.utcnow().strftime("%H:%M:%S")

@app.get("/activity")
async def root():
    res = requests.get("https://www.boredapi.com/api/activity/")
    print(res.json())
    return res.json()['activity']

    
'''
for running locally type
$ venv\Scripts\activate
$ uvicorn main:app --reload
'''
if __name__ == "__main__":
    uvicorn.run(app)
    