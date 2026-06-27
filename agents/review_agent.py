from services.gemini_service import generate
from schemas.review_schema import ReviewAgentOutput,ReviewInput
from prompts.review_prompt import build_prompt

class ReviewAgent:

    @staticmethod
    def generate_replies(data:ReviewInput) ->ReviewAgentOutput:

        prompt=build_prompt(data)

        try:
            return generate(prompt,ReviewAgentOutput)

        except Exception as e:

            raise ValueError(f"Review generation failed: {e}")from e
