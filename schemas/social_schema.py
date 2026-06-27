from pydantic import BaseModel

class SocialPost(BaseModel):
    day: str
    platform: str
    caption: str
    hashtags: list[str]
    post_type: str

class SocialAgentOutput(BaseModel):
    posts: list[SocialPost]

class SocialInput(BaseModel):
    business_name: str
    category: str
    city: str
    target_audience: str
