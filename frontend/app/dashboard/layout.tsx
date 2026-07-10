import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

// Server-side guard: anyone not signed in is bounced to /login before any
// dashboard page renders.
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return <>{children}</>;
}
