from pydantic import BaseModel

class Review(BaseModel):
    reviewer_name: str
    rating: int
    review_text: str
    date: str

class ReviewReply(BaseModel):
    reviewer_name: str
    suggested_reply: str
    is_negative: bool

class ReviewAgentOutput(BaseModel):
    replies: list[ReviewReply]
    summary: str
    average_rating: float

class ReviewInput(BaseModel):
    reviews: list[Review]
