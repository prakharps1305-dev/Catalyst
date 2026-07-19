// Where "Get started" / sales enquiries go.
// Change these two values to update every contact CTA on the site.

export const CONTACT_EMAIL = "prakhar.ps.1305@gmail.com";

// Set to a number in international format, digits only (e.g. "919876543210")
// to send people to WhatsApp instead of email. Leave "" to use email.
export const CONTACT_WHATSAPP = "";

export function contactLink(planName: string): string {
  const msg = `Hi! I'd like to get started with Catalyst (${planName} plan).`;

  if (CONTACT_WHATSAPP) {
    return `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  }

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Catalyst — ${planName} plan`
  )}&body=${encodeURIComponent(msg)}`;
}
