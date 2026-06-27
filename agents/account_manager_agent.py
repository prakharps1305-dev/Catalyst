from services.gemini_service import generate
from schemas.account_manager_schema import AccountManagerOutput,AccountManagerInput
from prompts.account_manager_prompt import build_prompt

class AccountManagerAgent:

    @staticmethod
    def answer_question(data:AccountManagerInput) ->AccountManagerOutput:

        prompt=build_prompt(data)

        try:
            return generate(prompt,AccountManagerOutput)

        except Exception as e:

            raise ValueError(f"Account manager generation failed: {e}")from e
