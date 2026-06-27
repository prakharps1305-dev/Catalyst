from schemas.social_schema import SocialInput

SOCIAL_PROMPT="""

You are an expert social media manager for local Indian businesses.

Write a full week of social media posts as a content calendar.

Requirements:

- Generate exactly 7 posts, one for each day from Monday to Sunday.
- Each caption must be engaging and under 200 characters.
- Write captions in a natural mix of English and Hinglish.
- Provide relevant, local hashtags for each post, including the city name.
- Alternate the platform between instagram and facebook across the week.
- Set post_type for each post to one of: promotional, educational, engagement.
- Use a healthy mix of post types across the week.

Do not include explanations or markdown.
"""

def build_prompt(data: SocialInput) -> str:

    return SOCIAL_PROMPT + f"""

    Business Name: {data.business_name}
    Category: {data.category}
    City: {data.city}
    Target Audience: {data.target_audience}
    """
