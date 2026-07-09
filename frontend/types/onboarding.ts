// types/onboarding.ts

export type OnboardingData = {
  business_name: string;
  category: string;
  city: string;
  address: string;

  description: string;
  target_audience: string;
  tone: string;

  email: string;
  phone: string;

  social_link: string;
};

export type OnboardingErrors = Partial<
  Record<keyof OnboardingData, string>
>;

export const initialOnboardingData: OnboardingData = {
  business_name: "",
  category: "",
  city: "",
  address: "",

  description: "",
  target_audience: "",
  tone: "",

  email: "",
  phone: "",

  social_link: "",
};