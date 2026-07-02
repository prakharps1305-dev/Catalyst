import razorpay
import os
import logging
import utils.logger_config

logger = logging.getLogger(__name__)

key_id = os.getenv("RAZORPAY_KEY_ID")
key_secret = os.getenv("RAZORPAY_KEY_SECRET")

client = razorpay.Client(auth=(key_id, key_secret))

def create_payment_link(amount_rupees: int, business_name: str, phone: str) -> dict:

    logger.info(f"Creating payment link for {business_name}, amount: ₹{amount_rupees}")

    payload = {
        "amount": amount_rupees * 100,
        "currency": "INR",
        "description": f"Payment for {business_name}",
        "customer": {
            "contact": phone
        }
    }

    response = client.payment_link.create(payload)

    logger.info(f"Payment link created: {response['id']}")

    return {
        "payment_url": response["short_url"],
        "payment_id": response["id"]
    }
