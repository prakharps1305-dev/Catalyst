from pydantic import BaseModel

class AnalyticsOutput(BaseModel):
    weekly_summary: str
    top_recommendations: list[str]
    visitor_trend: str
    best_performing_channel: str
    estimated_revenue_influenced: str

class AnalyticsInput(BaseModel):
    business_name: str
    category: str
    city: str
    time_period: str
