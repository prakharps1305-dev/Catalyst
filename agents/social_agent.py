from services.gemini_service import generate
from schemas.social_schema import SocialAgentOutput,SocialInput
from prompts.social_prompt import build_prompt

class SocialAgent:

    @staticmethod
    def generate_posts(data:SocialInput) ->SocialAgentOutput:

        prompt=build_prompt(data)

        try:
            return generate(prompt,SocialAgentOutput)

        except Exception as e:

            raise ValueError(f"Social media generation failed: {e}")from e
