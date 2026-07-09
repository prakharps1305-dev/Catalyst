from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
from app.db.supabase import supabase

router = APIRouter()

# This defines what the frontend must send
class BusinessCreate(BaseModel):
    name: str
    type: str
    location: str
    services: List[str]
    phone: str

@router.post("/")
async def create_business(data: BusinessCreate):
    try:
        result = supabase.table("businesses").insert({
            "name": data.name,
            "type": data.type,
            "location": data.location,
            "services": data.services,
            "phone": data.phone,
        }).execute()

        return {
            "message": "Business created successfully",
            "business": result.data[0]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/")
async def get_businesses():
    try:
        result = supabase.table("businesses").select("*").execute()
        return {"businesses": result.data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    


@router.get("/{business_id}")
async def get_business(business_id: str):
    try:
        result = supabase.table("businesses").select("*").eq("id", business_id).execute()
        
        if not result.data:
            raise HTTPException(status_code=404, detail="Business not found")
        
        return {"business": result.data[0]}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))