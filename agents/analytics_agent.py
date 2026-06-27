from services.gemini_service import generate
from schemas.analytics_schema import AnalyticsOutput,AnalyticsInput
from prompts.analytics_prompt import build_prompt

class AnalyticsAgent:

    @staticmethod
    def generate_analytics(data:AnalyticsInput) ->AnalyticsOutput:

        prompt=build_prompt(data)

        try:
            return generate(prompt,AnalyticsOutput)

        except Exception as e:

            raise ValueError(f"Analytics generation failed: {e}")from e
