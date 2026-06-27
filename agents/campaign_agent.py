from services.gemini_service import generate
from schemas.campaign_schema import CampaignAgentOutput,CampaignInput
from prompts.campaign_prompt import build_prompt

class CampaignAgent:

    @staticmethod
    def generate_campaigns(data:CampaignInput) ->CampaignAgentOutput:

        for field in ("business_name", "category", "city", "phone", "campaign_type"):
            value = getattr(data, field)
            if not value or not value.strip():
                raise ValueError(f"{field} must not be empty or blank")

        prompt=build_prompt(data)

        try:
            return generate(prompt,CampaignAgentOutput)

        except Exception as e:

            raise ValueError(f"Campaign generation failed: {e}")from e
