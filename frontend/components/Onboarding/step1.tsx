"use client";

import {
  OnboardingData,
  OnboardingErrors,
} from "@/types/onboarding";

type Props = {
  data: Pick<
    OnboardingData,
    "business_name" | "category" | "city" | "address"
  >;

  errors: Pick<
    OnboardingErrors,
    "business_name" | "category" | "city" | "address"
  >;

  update: (
    field:
      | "business_name"
      | "category"
      | "city"
      | "address",
    value: string
  ) => void;
};

const businessCategories = [
  "Restaurant",
  "Cafe",
  "Retail Store",
  "Salon",
  "Clinic",
  "Gym",
  "Hotel",
  "Education",
  "Professional Services",
  "Real Estate",
  "E-commerce",
  "Technology",
  "Manufacturing",
  "Other",
];

export default function Step1({
  data,
  update,
  errors,
}: Props) {
  return (
    <div className="space-y-7">

      {/* Business Name */}

      <div>
        <label className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
          Business Name *
        </label>

        <input
          type="text"
          value={data.business_name}
          onChange={(e) =>
            update("business_name", e.target.value)
          }
          placeholder="Acme Technologies Pvt. Ltd."
          className={`mt-2 w-full rounded-md border bg-surface/60 px-4 py-3 text-cream outline-none transition-colors focus:border-amber ${
            errors.business_name
              ? "border-amber"
              : "border-hairline"
          }`}
        />

        {errors.business_name && (
          <p className="mt-2 text-xs text-amber">
            {errors.business_name}
          </p>
        )}
      </div>

      {/* Category */}

      <div>
        <label className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
          Business Category *
        </label>

        <select
          value={data.category}
          onChange={(e) =>
            update("category", e.target.value)
          }
          className={`mt-2 w-full rounded-md border bg-surface/60 px-4 py-3 text-cream outline-none focus:border-amber ${
            errors.category
              ? "border-amber"
              : "border-hairline"
          }`}
        >
          <option value="">Select Category</option>

          {businessCategories.map((cat) => (
            <option
              key={cat}
              value={cat}
              className="bg-surface"
            >
              {cat}
            </option>
          ))}
        </select>

        {errors.category && (
          <p className="mt-2 text-xs text-amber">
            {errors.category}
          </p>
        )}
      </div>

      {/* City */}

      <div>
        <label className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
          City *
        </label>

        <input
          type="text"
          value={data.city}
          onChange={(e) =>
            update("city", e.target.value)
          }
          placeholder="Mumbai"
          className={`mt-2 w-full rounded-md border bg-surface/60 px-4 py-3 text-cream outline-none transition-colors focus:border-amber ${
            errors.city
              ? "border-amber"
              : "border-hairline"
          }`}
        />

        {errors.city && (
          <p className="mt-2 text-xs text-amber">
            {errors.city}
          </p>
        )}
      </div>

      {/* Address */}

      <div>
        <label className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
          Business Address *
        </label>

        <textarea
          rows={3}
          value={data.address}
          onChange={(e) =>
            update("address", e.target.value)
          }
          placeholder="Street, Area, City, State, PIN"
          className={`mt-2 w-full resize-none rounded-md border bg-surface/60 px-4 py-3 text-cream outline-none transition-colors focus:border-amber ${
            errors.address
              ? "border-amber"
              : "border-hairline"
          }`}
        />

        {errors.address && (
          <p className="mt-2 text-xs text-amber">
            {errors.address}
          </p>
        )}
      </div>

    </div>
  );
}