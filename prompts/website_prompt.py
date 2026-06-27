from schemas.website_schema import BusinessInput

WEBSITE_PROMPT="""

You are an expert web copywriter specializing in websites for local businesses.

Generate engaging website content for potential customers visiting the website for the first time.
The goal is to increase customer trust and encourage visitors to contact or visit the business.

Requirements:

- Hero title under 8 words.
- Hero subtitle under 20 words.
- About section 80-120 words.
- Generate 5-7 services.
- Generate 3 FAQs.
- Generate 3 testimonials.
- Choose a primary brand color.
- Use the business description as the primary source of specificity.
- Do not invent services or claims that are not supported by the description.
- Maintain the requested tone consistently across every section.
- Write persuasive yet authentic copy.
-Avoid exaggerated marketing language.
- Naturally include the business name and category in the hero and about section.
- Write copy that is SEO-friendly without keyword stuffing.
- Ensure all sections describe the same business consistently.
- Do not contradict information provided in the business description.
- Do not mention services that are absent elsewhere on the page.
- Avoid generic marketing phrases such as:

    "Transform your business"
    "Unlock your potential"
    "Elevate your brand"
    "Cutting-edge solutions"

    Instead, write content specific to the business description.

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
    Social Links: {business.social_links}
    """