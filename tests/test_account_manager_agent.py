from dotenv import load_dotenv

# Load .env before importing the agent, since gemini_service builds its
# client from env vars at import time.
load_dotenv()

from agents.account_manager_agent import AccountManagerAgent
from schemas.account_manager_schema import AccountManagerInput


def test_account_manager_agent():

    data = AccountManagerInput(
        business_name="Glow & Go Salon",
        category="Salon",
        city="Patna",
        question="How is my business doing this week?",
        context=(
            "This week the salon received 2 negative reviews (ratings 1 and 2), "
            "down from zero negative reviews last week. Website traffic dropped 20% "
            "compared to last week. 1 WhatsApp festival campaign was sent. "
            "Estimated revenue influenced was lower than the previous week."
        ),
    )

    output = AccountManagerAgent.answer_question(data)

    print("\nAnswer:")
    print(output.answer)

    print("\nPriority Actions:")
    for action in output.priority_actions:
        print(f"- {action}")

    print(f"\nAlert: {output.alert}")

    assert output.alert.strip() != ""


if __name__ == "__main__":
    test_account_manager_agent()
