from dotenv import load_dotenv

# Load .env before importing the agent, since gemini_service builds its
# client from env vars at import time.
load_dotenv()

from agents.review_agent import ReviewAgent
from schemas.review_schema import Review, ReviewInput


def test_review_agent():

    reviews = ReviewInput(reviews=[
        Review(
            reviewer_name="Aarav Sharma",
            rating=5,
            review_text="Absolutely loved this place! The staff were friendly and the service was top notch.",
            date="2026-06-01",
        ),
        Review(
            reviewer_name="Meera Nair",
            rating=3,
            review_text="It was okay. Nothing special but nothing terrible either.",
            date="2026-06-10",
        ),
        Review(
            reviewer_name="Rohan Gupta",
            rating=1,
            review_text="Very disappointed. I waited an hour and the order was wrong.",
            date="2026-06-15",
        ),
    ])

    output = ReviewAgent.generate_replies(reviews)

    print("\nSummary:")
    print(output.summary)
    print(f"\nAverage Rating: {output.average_rating}")

    print("\nSuggested Replies:")
    for reply in output.replies:
        print(f"\n{reply.reviewer_name} (is_negative={reply.is_negative}):")
        print(reply.suggested_reply)

    # The rating-1 review must be flagged negative.
    rohan = next(r for r in output.replies if r.reviewer_name == "Rohan Gupta")
    assert rohan.is_negative is True

    # The positive (5) and neutral (3) reviews must not be flagged negative.
    aarav = next(r for r in output.replies if r.reviewer_name == "Aarav Sharma")
    meera = next(r for r in output.replies if r.reviewer_name == "Meera Nair")
    assert aarav.is_negative is False
    assert meera.is_negative is False


if __name__ == "__main__":
    test_review_agent()
