from fastapi import FastAPI
from schemas.website_schema import BusinessInput,WebsiteOutput
from schemas.review_schema import ReviewInput, ReviewAgentOutput
from schemas.campaign_schema import CampaignInput, CampaignAgentOutput
from schemas.social_schema import SocialInput, SocialAgentOutput
from schemas.analytics_schema import AnalyticsInput, AnalyticsOutput
from schemas.account_manager_schema import AccountManagerInput, AccountManagerOutput
from agents.website_agent import WebsiteAgent
from agents.review_agent import ReviewAgent
from agents.campaign_agent import CampaignAgent
from agents.social_agent import SocialAgent
from agents.analytics_agent import AnalyticsAgent
from agents.account_manager_agent import AccountManagerAgent
from utils import logger
import logging

app=FastAPI(title="GrowthPilot API",version="1.0.0")

logger=logging.getLogger(__name__)

@app.get("/")
def home():
    return {"message":"GrowthPilot Backend Running!"}

@app.get("/health")
def health():
    return {
        "status": "ok",
        "vertex": "connected"
    }

@app.post("/generate-website",response_model=WebsiteOutput)
def generate_website(business:BusinessInput):

    logger.info(f"Website generation requested for {business.business_name}")

    return WebsiteAgent.generate_website(business)

@app.post("/generate-reviews",response_model=ReviewAgentOutput)
def generate_reviews(data:ReviewInput):

    return ReviewAgent.generate_replies(data)

@app.post("/generate-campaign",response_model=CampaignAgentOutput)
def generate_campaign(data:CampaignInput):

    return CampaignAgent.generate_campaigns(data)

@app.post("/generate-social",response_model=SocialAgentOutput)
def generate_social(data:SocialInput):

    return SocialAgent.generate_posts(data)

@app.post("/generate-analytics",response_model=AnalyticsOutput)
def generate_analytics(data:AnalyticsInput):

    return AnalyticsAgent.generate_analytics(data)

@app.post("/chat",response_model=AccountManagerOutput)
def chat(data:AccountManagerInput):

    return AccountManagerAgent.answer_question(data)
