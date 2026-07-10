from services.gemini_service import generate
from schemas.website_schema import WebsiteOutput,BusinessInput
from prompts.website_prompt import build_prompt
import utils.logger_config
import logging

logger=logging.getLogger(__name__)

class WebsiteAgent:

    @staticmethod
    def generate_website(business:BusinessInput) ->WebsiteOutput:

        for field in BusinessInput.model_fields:
            value = getattr(business, field)

            if isinstance(value,str):
                if not value.strip():
                    raise ValueError(f"{field} must not be empty or blank")
            
            elif value is None:
                raise ValueError(f"{field} is required")

        try:
            logger.info("Generating website for %s",business.business_name)

            prompt=build_prompt(business)

            if business.reference_images:
                prompt += (
                    "\n\nReference images of the business, its space, or its "
                    "branding are attached. Use them to inform the primary_color "
                    "(match the dominant brand color) and the overall tone."
                )

            logger.info("Calling Gemini")

            website = generate(prompt, WebsiteOutput, image_urls=business.reference_images)

            if website is None or not website.hero_title.strip():
                raise ValueError("Website generation returned empty content")

            logger.info("Website generated successfully")

            return website
        
        except Exception:

            logger.exception("Website generation failed")
            raise