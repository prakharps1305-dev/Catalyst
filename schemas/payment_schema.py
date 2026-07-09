from pydantic import BaseModel

class PaymentLinkInput(BaseModel):
    business_name: str
    phone: str
    amount: int

class PaymentLinkOutput(BaseModel):
    payment_url: str
    payment_id: str
