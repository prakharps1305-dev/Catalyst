from datetime import date
from typing import Literal
from pydantic import BaseModel


class BusinessMetrics(BaseModel):
    visitors: int
    website_clicks: int
    leads: int
    conversions: int
    revenue: float
    average_rating: float
    review_count: int
    social_engagement: int


class AnalyticsOutput(BaseModel):
    weekly_summary: str
    top_recommendations: list[str]

    visitor_growth_percentage: float
    trend_direction: Literal["up", "down", "stable"]

    best_performing_channel: Literal[
        "Website",
        "WhatsApp",
        "Instagram",
        "Facebook",
        "Google Business Profile",
        "Referral",
        "Walk-in"
    ]

    projected_revenue: float
    currency: Literal["INR"]


class AnalyticsInput(BaseModel):
    business_name: str
    category: str
    city: str

    start_date: date
    end_date: date

    metrics: BusinessMetrics