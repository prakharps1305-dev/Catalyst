from services.gemini_service import generate
from schemas.campaign_schema import CampaignAgentOutput,CampaignInput
from prompts.campaign_prompt import build_prompt

class CampaignAgent:

    @staticmethod
    def generate_campaigns(data:CampaignInput) ->CampaignAgentOutput:

        prompt=build_prompt(data)

        try:
            return generate(prompt,CampaignAgentOutput)

        except Exception as e:

            raise ValueError(f"Campaign generation failed: {e}")from e
