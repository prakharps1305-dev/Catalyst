from services.gemini_service import generate
from schemas.review_schema import ReviewAgentOutput,ReviewInput
from prompts.review_prompt import build_prompt

class ReviewAgent:

    @staticmethod
    def generate_replies(data:ReviewInput) ->ReviewAgentOutput:

        if not data.reviews:
            raise ValueError("reviews list must not be empty")

        prompt=build_prompt(data)

        try:
            result = generate(prompt,ReviewAgentOutput)

        except Exception as e:

            raise ValueError(f"Review generation failed: {e}")from e

        if not result.replies:
            raise ValueError("Review generation returned no replies")

        return result
