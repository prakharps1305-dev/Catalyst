import os
import logging
import utils.logger_config

logger = logging.getLogger(__name__)

# Razorpay is only needed for the payment endpoint. Import it lazily so the rest
# of the API (website/reviews/etc.) boots even if razorpay isn't installed or its
# deps (pkg_resources/setuptools) are missing. The client is created on first use.
_client = None


def _get_client():
    global _client
    if _client is None:
        import razorpay

        key_id = os.getenv("RAZORPAY_KEY_ID")
        key_secret = os.getenv("RAZORPAY_KEY_SECRET")
        if not key_id or not key_secret:
            raise RuntimeError(
                "Razorpay is not configured. Set RAZORPAY_KEY_ID and "
                "RAZORPAY_KEY_SECRET in your .env to use payment links."
            )
        _client = razorpay.Client(auth=(key_id, key_secret))
    return _client


def create_payment_link(amount_rupees: int, business_name: str, phone: str) -> dict:

    logger.info(f"Creating payment link for {business_name}, amount: ₹{amount_rupees}")

    client = _get_client()

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
