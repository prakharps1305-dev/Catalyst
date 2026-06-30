"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import ProgressBar from "./ProgressBar";

import {
  OnboardingData,
  OnboardingErrors,
  initialOnboardingData,
} from "@/types/onboarding";

const TOTAL_STEPS = 4;

const stepTitles = [
  "Business",
  "Strategy",
  "Contact",
  "Review",
];

export default function OnboardingForm() {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [form, setForm] =
    useState<OnboardingData>(initialOnboardingData);

  const [errors, setErrors] =
    useState<OnboardingErrors>({});

  const [loading, setLoading] =
    useState(false);

  function update(
    field: keyof OnboardingData,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  }

  function validateCurrentStep() {
    const nextErrors: OnboardingErrors = {};

    switch (step) {
      case 1:
        if (!form.business_name.trim())
          nextErrors.business_name =
            "Business name is required.";

        if (!form.category.trim())
          nextErrors.category =
            "Select a category.";

        if (!form.city.trim())
          nextErrors.city =
            "Enter your city.";

        if (!form.address.trim())
          nextErrors.address =
            "Enter your address.";

        break;

      case 2:
        if (!form.description.trim())
          nextErrors.description =
            "Tell us about your business.";

        if (!form.target_audience.trim())
          nextErrors.target_audience =
            "Who is your ideal customer?";

        if (!form.tone.trim())
          nextErrors.tone =
            "Choose your preferred tone.";

        break;

      case 3:
        if (!form.email.trim())
          nextErrors.email =
            "Email is required.";

        if (!form.phone.trim())
          nextErrors.phone =
            "Phone number is required.";

        if (!form.social_link.trim())
          nextErrors.social_link =
            "Add one social link.";

        break;
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function nextStep() {
    if (!validateCurrentStep()) return;

    setStep((prev) =>
      Math.min(prev + 1, TOTAL_STEPS)
    );
  }

  function previousStep() {
    setStep((prev) =>
      Math.max(prev - 1, 1)
    );
  }

    async function handleSubmit() {
    setLoading(true);

    try {
      // This is where your FastAPI call will go later.
      // Example:
      //
      // await fetch("http://localhost:8000/api/onboarding",{
      //   method:"POST",
      //   headers:{
      //     "Content-Type":"application/json"
      //   },
      //   body:JSON.stringify({
      //      ...form,
      //      social_links:[form.social_link]
      //   })
      // });

      console.log({
        ...form,
        social_links: [form.social_link],
      });

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ProgressBar
        currentStep={step}
        totalSteps={TOTAL_STEPS}
        titles={stepTitles}
      />

      {step === 1 && (
        <Step1
          data={{
            business_name: form.business_name,
            category: form.category,
            city: form.city,
            address: form.address,
          }}
          errors={{
            business_name: errors.business_name,
            category: errors.category,
            city: errors.city,
            address: errors.address,
          }}
          update={update}
        />
      )}

      {step === 2 && (
        <Step2
          data={{
            description: form.description,
            target_audience: form.target_audience,
            tone: form.tone,
          }}
          errors={{
            description: errors.description,
            target_audience: errors.target_audience,
            tone: errors.tone,
          }}
          update={update}
        />
      )}

      {step === 3 && (
        <Step3
          data={{
            email: form.email,
            phone: form.phone,
            social_link: form.social_link,
          }}
          errors={{
            email: errors.email,
            phone: errors.phone,
            social_link: errors.social_link,
          }}
          update={update}
        />
      )}

      {step === 4 && (
        <Step4 data={form} />
      )}

      <div className="mt-10 flex items-center justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={previousStep}
            className="rounded-sm border border-hairline px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-cream transition hover:border-muted"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={nextStep}
            className="rounded-sm bg-amber px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-base transition-transform hover:-translate-y-0.5"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            className="rounded-sm bg-amber px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-base transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {loading ? "Creating Workspace..." : "Create Workspace"}
          </button>
        )}
      </div>
    </>
  );
}