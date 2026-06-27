from pydantic import BaseModel

class Campaign(BaseModel):
    title: str
    message: str
    target_audience: str
    scheduled_date: str
    status: str

class CampaignAgentOutput(BaseModel):
    campaigns: list[Campaign]

class CampaignInput(BaseModel):
    business_name: str
    category: str
    city: str
    phone: str
    campaign_type: str
