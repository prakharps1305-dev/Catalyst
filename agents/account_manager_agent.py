from services.gemini_service import generate
from schemas.account_manager_schema import AccountManagerOutput,AccountManagerInput
from prompts.account_manager_prompt import build_prompt

class AccountManagerAgent:

    @staticmethod
    def answer_question(data:AccountManagerInput) ->AccountManagerOutput:

        for field in ("business_name", "category", "city", "question"):
            value = getattr(data, field)
            if not value or not value.strip():
                raise ValueError(f"{field} must not be empty or blank")

        prompt=build_prompt(data)

        try:
            return generate(prompt,AccountManagerOutput)

        except Exception as e:

            raise ValueError(f"Account manager generation failed: {e}")from e
