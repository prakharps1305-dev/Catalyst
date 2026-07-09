from pydantic import BaseModel

class AccountManagerOutput(BaseModel):
    answer: str
    priority_actions: list[str]
    alert: str

class AccountManagerInput(BaseModel):
    business_name: str
    category: str
    city: str
    question: str
    context: str
