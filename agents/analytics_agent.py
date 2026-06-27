from services.gemini_service import generate
from schemas.analytics_schema import AnalyticsOutput, AnalyticsInput
from prompts.analytics_prompt import build_prompt


class AnalyticsAgent:

    @staticmethod
    def generate_analytics(data: AnalyticsInput) -> AnalyticsOutput:

        # Validate required string fields
        for field in ("business_name", "category", "city"):
            value = getattr(data, field)
            if not value or not value.strip():
                raise ValueError(f"{field} must not be empty or blank")

        # Validate date range
        if data.start_date > data.end_date:
            raise ValueError("start_date cannot be after end_date")

        # Validate metrics
        if data.metrics is None:
            raise ValueError("metrics are required")

        # Build prompt
        prompt = build_prompt(data)

        try:
            analytics = generate(prompt, AnalyticsOutput)

            # Validate response
            if analytics is None:
                raise ValueError("Analytics generation returned empty content")

            return analytics

        except Exception as e:
            raise ValueError(f"Analytics generation failed: {e}") from e