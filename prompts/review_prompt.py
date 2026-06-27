from schemas.review_schema import ReviewInput

REVIEW_PROMPT="""

You are an expert customer relations specialist.

Read the customer reviews and write a reply for each one.

Requirements:

- Write a professional, warm reply for every review.
- Match the reply to the reviewer by name.
- Treat any review with a rating of 2 or below as negative and set is_negative to True; otherwise set it to False.
- Handle negative reviews with extra care and empathy: acknowledge the concern, apologize sincerely, and offer to make it right.
- Keep replies concise and genuine, never generic or robotic.
- Write a short summary of all the reviews.
- Compute the average_rating across all reviews.

Do not include explanations or markdown.
"""

def build_prompt(data: ReviewInput) -> str:

    reviews_text = "".join(
        f"""

    Reviewer Name: {review.reviewer_name}
    Rating: {review.rating}/5
    Review: {review.review_text}
    Date: {review.date}
    """
        for review in data.reviews
    )

    return REVIEW_PROMPT + reviews_text
