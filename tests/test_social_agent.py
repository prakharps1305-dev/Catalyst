from dotenv import load_dotenv

# Load .env before importing the agent, since gemini_service builds its
# client from env vars at import time.
load_dotenv()

from agents.social_agent import SocialAgent
from schemas.social_schema import SocialInput


def test_social_agent():

    data = SocialInput(
        business_name="Iron Temple Gym",
        category="Gym",
        city="Patna",
        target_audience="College students and young professionals",
    )

    output = SocialAgent.generate_posts(data)

    print("\nWeekly Content Calendar:")
    for post in output.posts:
        print(f"\n{post.day} ({post.platform}) - {post.post_type}")
        print(f"Caption: {post.caption}")
        print(f"Hashtags: {' '.join(post.hashtags)}")

    assert len(output.posts) == 7


if __name__ == "__main__":
    test_social_agent()
