from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from app.db.supabase import supabase

router = APIRouter()

class ReviewCreate(BaseModel):
    business_id: str
    reviewer_name: str
    rating: int
    content: str

class ReviewReply(BaseModel):
    reply: str

@router.get("/{business_id}")
async def get_reviews(business_id: str):
    try:
        result = supabase.table("reviews").select("*").eq("business_id", business_id).execute()
        return {"reviews": result.data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/")
async def create_review(data: ReviewCreate):
    try:
        result = supabase.table("reviews").insert({
            "business_id": data.business_id,
            "reviewer_name": data.reviewer_name,
            "rating": data.rating,
            "content": data.content,
        }).execute()
        return {"message": "Review added", "review": result.data[0]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.patch("/{review_id}/reply")
async def reply_to_review(review_id: str, data: ReviewReply):
    try:
        result = supabase.table("reviews").update({
            "reply": data.reply
        }).eq("id", review_id).execute()
        return {"message": "Reply added", "review": result.data[0]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.patch("/{review_id}/flag")
async def flag_review(review_id: str):
    try:
        result = supabase.table("reviews").update({
            "flagged": True
        }).eq("id", review_id).execute()
        return {"message": "Review flagged", "review": result.data[0]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))