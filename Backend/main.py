from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import businesses, reviews, campaigns, chat, payments, analytics

app = FastAPI(title="GrowthPilot API", version="1.0.0")

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # we'll lock this down later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register all routes
app.include_router(businesses.router, prefix="/api/businesses", tags=["businesses"])
app.include_router(reviews.router, prefix="/api/reviews", tags=["reviews"])
app.include_router(campaigns.router, prefix="/api/campaigns", tags=["campaigns"])
app.include_router(chat.router, prefix="/api/chat", tags=["chat"])
app.include_router(payments.router, prefix="/api/payments", tags=["payments"])
app.include_router(analytics.router, prefix="/api/analytics", tags=["analytics"])

@app.get("/")
def root():
    return {"message": "GrowthPilot API is running..."}