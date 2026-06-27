from services.gemini_service import generate
from schemas.website_schema import WebsiteOutput,BusinessInput
from prompts.website_prompt import build_prompt
from utils import logger
import logging

logger=logging.getLogger(__name__)

class WebsiteAgent:

    @staticmethod
    def generate_website(business:BusinessInput) ->WebsiteOutput:

        if not business.business_name or not business.business_name.strip():
            raise ValueError("business_name must not be empty or blank")

        if not business.category or not business.category.strip():
            raise ValueError("category must not be empty or blank")

        try:
            logger.info("Creating prompt")

            prompt=build_prompt(business)

            logger.info("Calling Gemini")

            website = generate(prompt, WebsiteOutput)

            logger.info("Website generated successfully")

            return website
        
        except Exception as e:

            logger.exception("Website generation failed")
            raise