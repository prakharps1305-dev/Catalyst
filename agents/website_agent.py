from services.gemini_service import generate
from schemas.website_schema import WebsiteOutput,BusinessInput
from prompts.website_prompt import build_prompt

class WebsiteAgent:

    @staticmethod
    def generate_website(business:BusinessInput) ->WebsiteOutput:

        prompt=build_prompt(business)

        try:
            return generate(prompt,WebsiteOutput)
        
        except Exception as e:

            raise ValueError(f"Website generation failed: {e}")from e