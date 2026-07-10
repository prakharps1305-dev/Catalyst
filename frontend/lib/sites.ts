import { createClient } from "@/lib/supabase/client";
import type { GenerateWebsitePayload, GeneratedWebsite } from "@/types/website";

function slugify(name: string): string {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
  return base || "site";
}

/**
 * Persists a generated website (and its business) to Supabase for the signed-in
 * user. Returns the new site's id + public slug, or null if no user is signed in.
 */
export async function saveGeneratedSite(
  input: GenerateWebsitePayload,
  content: GeneratedWebsite
): Promise<{ id: string; slug: string } | null> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: business, error: bizErr } = await supabase
    .from("businesses")
    .insert({
      user_id: user.id,
      name: input.business_name,
      category: input.category,
      city: input.city,
      target_audience: input.target_audience,
      tone: input.tone,
      phone: input.phone,
      email: input.email,
      address: input.address,
      description: input.description,
      social_links: input.social_links,
    })
    .select("id")
    .single();
  if (bizErr) throw bizErr;

  const slug = `${slugify(input.business_name)}-${Math.random()
    .toString(36)
    .slice(2, 6)}`;

  // Embed public contact info in the content so published site pages can render
  // it without reading the owner-only businesses table.
  const enrichedContent = {
    ...content,
    _business: {
      name: input.business_name,
      phone: input.phone,
      email: input.email,
      address: input.address,
      city: input.city,
    },
  };

  const { data: site, error: siteErr } = await supabase
    .from("sites")
    .insert({
      business_id: business.id,
      user_id: user.id,
      slug,
      content: enrichedContent,
      published: true,
    })
    .select("id, slug")
    .single();
  if (siteErr) throw siteErr;

  return { id: site.id as string, slug: site.slug as string };
}
