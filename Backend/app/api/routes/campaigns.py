from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from app.db.supabase import supabase

router = APIRouter()

class CampaignCreate(BaseModel):
    business_id: str
    type: str  # "whatsapp", "social", "email"
    content: str
    scheduled_at: Optional[str] = None

@router.get("/{business_id}")
async def get_campaigns(business_id: str):
    try:
        result = supabase.table("campaigns").select("*").eq("business_id", business_id).execute()
        return {"campaigns": result.data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/")
async def create_campaign(data: CampaignCreate):
    try:
        result = supabase.table("campaigns").insert({
            "business_id": data.business_id,
            "type": data.type,
            "content": data.content,
            "scheduled_at": data.scheduled_at,
            "status": "draft"
        }).execute()
        return {"message": "Campaign created", "campaign": result.data[0]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.patch("/{campaign_id}/send")
async def mark_campaign_sent(campaign_id: str):
    try:
        result = supabase.table("campaigns").update({
            "status": "sent"
        }).eq("id", campaign_id).execute()
        return {"message": "Campaign marked as sent", "campaign": result.data[0]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/{campaign_id}")
async def delete_campaign(campaign_id: str):
    try:
        supabase.table("campaigns").delete().eq("id", campaign_id).execute()
        return {"message": "Campaign deleted"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))