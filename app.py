from fastapi import FASTAPI
from agents.website_agent import WebsiteAgent
from schemas.website_schema import BusinessInput

app=FASTAPI()

@app.post("/generate-website")

def generate_website(business:BusinessInput):

    return WebsiteAgent.generate_website(business)