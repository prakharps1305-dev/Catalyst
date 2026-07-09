from dotenv import load_dotenv

# Load .env before importing the agent, since gemini_service builds its
# client from env vars at import time.
load_dotenv()

from agents.campaign_agent import CampaignAgent
from schemas.campaign_schema import CampaignInput


def test_campaign_agent():

    data = CampaignInput(
        business_name="Glow & Go Salon",
        category="Salon",
        city="Patna",
        phone="9876543210",
        campaign_type="festival",
    )

    output = CampaignAgent.generate_campaigns(data)

    print("\nGenerated Campaigns:")
    for campaign in output.campaigns:
        print(f"\nTitle: {campaign.title}")
        print(f"Message: {campaign.message}")
        print(f"Target Audience: {campaign.target_audience}")
        print(f"Scheduled Date: {campaign.scheduled_date}")
        print(f"Status: {campaign.status}")

    assert len(output.campaigns) >= 1


if __name__ == "__main__":
    test_campaign_agent()
