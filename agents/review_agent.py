from services.gemini_service import generate
from schemas.review_schema import ReviewAgentOutput,ReviewInput
from prompts.review_prompt import build_prompt
import utils.logger_config
import logging

logger=logging.getLogger(__name__)

class ReviewAgent:

    @staticmethod
    def generate_replies(data:ReviewInput) ->ReviewAgentOutput:

        for field in ReviewInput.model_fields:
            value = getattr(data, field)

            if isinstance(value,str):
                if not value.strip():
                    raise ValueError(f"{field} must not be empty or blank")
            
            elif value is None:
                raise ValueError(f"{field} is required")
        try:

            logger.info("Generating review replies")

            prompt=build_prompt(data)

            logger.info("Calling Gemini")

            result = generate(prompt,ReviewAgentOutput)

            if result is None or not result.replies:
                raise ValueError("Review generation returned no replies")
            
            logger.info("Review replies generated successfully")

            return result

        except Exception:
            logger.exception("Review generation failed")
            raise
