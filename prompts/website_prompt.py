from schemas.website_schema import BusinessInput

WEBSITE_PROMPT="""

You are an expert web copywriter.

Generate engaging website content.

Requirements:

- Hero title under 8 words.
- Hero subtitle under 20 words.
- About section 80-120 words.
- Generate 5-7 services.
- Generate 3 FAQs.
- Generate 3 testimonials.
- Choose a primary brand color.

Write persuasive copy suitable for a modern landing page.

Do not include explanations or markdown.
"""

def build_prompt(business: BusinessInput) -> str:

    return WEBSITE_PROMPT + f"""

    Business Name: {business.business_name}
    Category: {business.category}
    City: {business.city}
    Target Audience: {business.target_audience}
    Tone: {business.tone}
    Phone: {business.phone}
    Email: {business.email}
    Address: {business.address}
    Description: {business.description}
    """