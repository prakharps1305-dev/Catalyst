from services.gemini_service import generate
from schemas.analytics_schema import AnalyticsOutput, AnalyticsInput
from prompts.analytics_prompt import build_prompt
import utils.logger_config
import logging

logger=logging.getLogger(__name__)

class AnalyticsAgent:

    @staticmethod
    def generate_analytics(data: AnalyticsInput) -> AnalyticsOutput:

        for field in AnalyticsInput.model_fields:
            value = getattr(data, field)

            if isinstance(value,str):
                if not value.strip():
                    raise ValueError(f"{field} must not be empty or blank")
                    
            elif value is None:
                raise ValueError(f"{field} is required")

        if data.start_date > data.end_date:
            raise ValueError("start_date cannot be after end_date")


        if data.metrics is None:
            raise ValueError("metrics are required")

        try:
            logger.info("Generating analytics for %s",data.business_name)

            prompt = build_prompt(data)

            logger.info("Calling Gemini")

            analytics = generate(prompt, AnalyticsOutput)

            if analytics is None:
                raise ValueError("Analytics generation returned empty content")

            logger.info("Analytics generated successfully")

            return analytics

        except Exception:
            logger.exception("Analytics generation failed")
            raise