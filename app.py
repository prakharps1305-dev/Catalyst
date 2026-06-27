from fastapi import FastAPI
from schemas.website_schema import BusinessInput,WebsiteOutput
from agents.website_agent import WebsiteAgent
from utils import logger
import logging

app=FastAPI(title="GrowthPilot API",version="1.0.0")

logger=logging.getLogger(__name__)

@app.get("/")
def home():
    return {"message":"GrowthPilot Backend Running!"}

@app.post("/generate-website",response_model=WebsiteOutput)
def generate_website(business:BusinessInput):

    logger.info(f"Website generation requested for {business.business_name}")

    return WebsiteAgent.generate_website(business)

@app.get("/health")
def health():
    return {
        "status": "ok",
        "vertex": "connected"
    }