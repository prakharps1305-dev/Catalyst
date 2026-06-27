from services.gemini_service import generate
from schemas.analytics_schema import AnalyticsOutput,AnalyticsInput
from prompts.analytics_prompt import build_prompt

class AnalyticsAgent:

    @staticmethod
    def generate_analytics(data:AnalyticsInput) ->AnalyticsOutput:

        for field in ("business_name", "category", "city", "time_period"):
            value = getattr(data, field)
            if not value or not value.strip():
                raise ValueError(f"{field} must not be empty or blank")

        prompt=build_prompt(data)

        try:
            return generate(prompt,AnalyticsOutput)

        except Exception as e:

            raise ValueError(f"Analytics generation failed: {e}")from e
