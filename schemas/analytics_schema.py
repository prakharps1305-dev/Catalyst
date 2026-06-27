from pydantic import BaseModel

class AnalyticsOutput(BaseModel):
    weekly_summary: str
    top_recommendations: list[str]
    visitor_trend: float
    best_performing_channel: str
    estimated_revenue_influenced: float

class AnalyticsInput(BaseModel):
    business_name: str
    category: str
    city: str
    time_period: str
