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
import { GenerateWebsitePayload, GeneratedWebsite } from "@/types/website";
import { API_BASE_URL } from "@/lib/config";

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

  const [submitError, setSubmitError] =
    useState<string | null>(null);

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
    setSubmitError(null);
    setLoading(true);

    try {
      const payload: GenerateWebsitePayload = {
        business_name: form.business_name,
        category: form.category,
        city: form.city,
        target_audience: form.target_audience,
        tone: form.tone,
        phone: form.phone,
        email: form.email,
        address: form.address,
        description: form.description,
        social_links: [form.social_link].filter(Boolean),
      };

      const res = await fetch(`${API_BASE_URL}/generate-website`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }

      const site: GeneratedWebsite = await res.json();
      sessionStorage.setItem("growthpilot_site", JSON.stringify(site));

      router.push("/result");
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong.";

      setSubmitError(
        msg.includes("Failed to fetch")
          ? "Couldn't reach the server. Check that the backend is running and reachable."
          : msg
      );
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

      {submitError && (
        <div className="mt-6 rounded-md border border-amber/30 bg-amber/5 p-4 text-sm text-amber">
          {submitError}
        </div>
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
            {loading ? "Generating your site..." : "Create Workspace"}
          </button>
        )}
      </div>
    </>
  );
}
