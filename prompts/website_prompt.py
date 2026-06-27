from schemas.website_schema import BusinessInput

WEBSITE_PROMPT="""

You are an expert web copywriter.

Generate engaging, persuasive website content suitable for a modern landing page.

STRICT GROUNDING RULES:
- Never invent facts not provided in the business input. If information is not
  supplied, omit that section entirely.
- Do not fabricate hours, pricing, policies, locations, statistics, awards, or
  credentials that are not present in the business input.

Content requirements:

- Hero title: under 8 words.
- Hero subtitle: under 20 words.
- About section: 80-120 words.
- Services: generate 5-7 services derived from the category and description.
- Choose a primary brand color appropriate to the category and tone.

- Why Choose Us (USP block): exactly 3 bullet points that summarize the
  business's key differentiators, derived only from the provided description.
  Do not invent advantages that are not implied by the input.

- FAQs: generate exactly 3 FAQs. Only generate questions that can be answered
  from the provided business info. Do not invent hours, pricing, or policies.
  If there is not enough provided information to answer a question truthfully,
  do not include that question.

- Testimonials: generate exactly 3 testimonials. These are illustrative and
  fictional. They must read as plausible customer sentiment about the tone and
  experience, and must NOT reference specific facts (hours, prices, locations,
  names, or figures) that are not given in the input.

- SEO metadata:
    - meta title: concise, under 60 characters, includes the business name.
    - meta description: compelling summary, under 160 characters, grounded only
      in the provided business info.

- Contact section: populate only from the phone, email, and address fields that
  are provided. Omit any contact field that is not supplied. Never invent or
  guess contact details.

Match the requested tone throughout.

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