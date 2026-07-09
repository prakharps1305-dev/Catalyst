from services.gemini_service import generate
from schemas.campaign_schema import CampaignAgentOutput,CampaignInput
from prompts.campaign_prompt import build_prompt
import utils.logger_config
import logging 

logger=logging.getLogger(__name__)

class CampaignAgent:

    @staticmethod
    def generate_campaigns(data:CampaignInput) ->CampaignAgentOutput:

        for field in CampaignInput.model_fields:
            value = getattr(data, field)

            if isinstance(value,str):
                if not value.strip():
                    raise ValueError(f"{field} must not be empty or blank")
            
            elif value is None:
                raise ValueError(f"{field} is required")

        try:
            logger.info("Generating campaigns for %s",data.business_name)

            prompt=build_prompt(data)

            logger.info("Calling Gemini")

            campaigns=generate(prompt,CampaignAgentOutput)

            if campaigns is None:
                raise ValueError("Campaign generation returned empty content")
            
            logger.info("Campaigns generated successfully")

            return campaigns

        except Exception:

            logger.exception("Campaign generation failed")
            raise