from services.gemini_service import generate
from schemas.account_manager_schema import AccountManagerOutput, AccountManagerInput
from prompts.account_manager_prompt import build_prompt
import utils.logger_config
import logging

logger = logging.getLogger(__name__)


class AccountManagerAgent:

    @staticmethod
    def answer_question(data: AccountManagerInput) -> AccountManagerOutput:

        for field in AccountManagerInput.model_fields:
            value = getattr(data, field)

            if isinstance(value, str):
                if not value.strip():
                    raise ValueError(f"{field} must not be empty or blank")

            elif value is None:
                raise ValueError(f"{field} is required")

        try:
            logger.info(
                "Generating account manager response for %s",
                data.business_name
            )

            prompt = build_prompt(data)

            logger.info("Calling Gemini")

            response = generate(prompt, AccountManagerOutput)

            if response is None:
                raise ValueError("Account manager returned empty content")

            logger.info("Account manager response generated successfully")

            return response

        except Exception:
            logger.exception("Account manager generation failed")
            raise