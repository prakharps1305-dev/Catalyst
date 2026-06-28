from services.gemini_service import generate
from schemas.social_schema import SocialAgentOutput,SocialInput
from prompts.social_prompt import build_prompt
import utils.logger_config
import logging

logger=logging.getLogger(__name__)

class SocialAgent:

    @staticmethod
    def generate_posts(data:SocialInput) ->SocialAgentOutput:

        for field in SocialInput.model_fields:
            value = getattr(data, field)

            if isinstance(value,str):
                if not value.strip():
                    raise ValueError(f"{field} must not be empty or blank")
            
            elif value is None:
                raise ValueError(f"{field} is required")

        try:
            logger.info("Generating social post for %s",data.business_name)

            prompt=build_prompt(data)

            logger.info("Calling Gemini")

            posts=generate(prompt,SocialAgentOutput)

            if posts is None:
                raise ValueError("Social media generation returned empty content")
            

            logger.info("Social posts created successfully")

            return posts

        except Exception:

            logger.exception("Social media generation failed")
            raise