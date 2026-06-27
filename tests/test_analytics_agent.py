from dotenv import load_dotenv

# Load .env before importing the agent, since gemini_service builds its
# client from env vars at import time.
load_dotenv()

from agents.analytics_agent import AnalyticsAgent
from schemas.analytics_schema import AnalyticsInput


def test_analytics_agent():

    data = AnalyticsInput(
        business_name="Spice Junction",
        category="Restaurant",
        city="Patna",
        time_period="weekly",
    )

    output = AnalyticsAgent.generate_analytics(data)

    print("\nWeekly Summary:")
    print(output.weekly_summary)

    print("\nTop Recommendations:")
    for rec in output.top_recommendations:
        print(f"- {rec}")

    print(f"\nVisitor Trend: {output.visitor_trend}")
    print(f"Best Performing Channel: {output.best_performing_channel}")
    print(f"Estimated Revenue Influenced: {output.estimated_revenue_influenced}")

    assert output.weekly_summary.strip() != ""
    assert len(output.top_recommendations) >= 3


if __name__ == "__main__":
    test_analytics_agent()
