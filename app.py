from fastapi import FastAPI
from schemas.website_schema import BusinessInput
from agents.website_agent import WebsiteAgent,WebsiteOutput

app=FastAPI(title="GrowthPilot API",version="1.0.0")

@app.get("/")
def home():
    return {"message":"GrowthPilot Backend Running!"}

@app.post("/generate-website",response_model=WebsiteOutput)
def generate_website(business:BusinessInput):

    return WebsiteAgent.generate_website(business)