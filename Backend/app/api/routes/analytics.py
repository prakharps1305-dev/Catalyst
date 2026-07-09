from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from app.db.supabase import supabase

router = APIRouter()

class AnalyticsEvent(BaseModel):
    business_id: str
    event_type: str  # "website_visit", "whatsapp_click", "call_click"
    metadata: Optional[dict] = None

@router.post("/event")
async def track_event(data: AnalyticsEvent):
    try:
        result = supabase.table("analytics_events").insert({
            "business_id": data.business_id,
            "event_type": data.event_type,
            "metadata": data.metadata
        }).execute()
        return {"message": "Event tracked", "event": result.data[0]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{business_id}")
async def get_analytics(business_id: str):
    try:
        result = supabase.table("analytics_events").select("*").eq("business_id", business_id).execute()
        
        # Count by event type
        summary = {}
        for event in result.data:
            etype = event["event_type"]
            summary[etype] = summary.get(etype, 0) + 1

        return {
            "business_id": business_id,
            "total_events": len(result.data),
            "summary": summary,
            "events": result.data
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))