"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignOutButton({
  className = "",
}: {
  className?: string;
}) {
  const router = useRouter();

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={signOut}
      className={
        className ||
        "font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-amber"
      }
    >
      Sign out
    </button>
  );
}
