from pydantic import BaseModel

class FAQ(BaseModel):
    question: str
    answer: str


class Testimonial(BaseModel):
    name: str
    review: str

class Service(BaseModel):

    title: str
    description: str

class WebsiteOutput(BaseModel):

    hero_title:str
    hero_subtitle:str
    about:str
    services:list[Service]
    faq:list[FAQ]
    testimonials:list[Testimonial]
    cta:str
    primary_color:str
    why_choose_us: list[str]
    meta_title: str
    meta_description: str

class BusinessInput(BaseModel):
    business_name: str
    category: str
    city: str
    target_audience: str
    tone: str
    phone: str
    email: str
    address:str
    description:str
    social_links:list[str]