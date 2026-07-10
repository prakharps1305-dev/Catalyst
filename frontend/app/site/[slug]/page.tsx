import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import PublishedSite, {
  type PublishedContent,
} from "@/components/site/PublishedSite";

async function getSite(slug: string): Promise<PublishedContent | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("sites")
    .select("content")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  return (data?.content as PublishedContent) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = await getSite(slug);
  if (!content) return { title: "Site not found" };
  return {
    title: content.meta_title || content.hero_title,
    description: content.meta_description || content.hero_subtitle,
  };
}

export default async function SitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await getSite(slug);
  if (!content) notFound();
  return <PublishedSite content={content} />;
}
