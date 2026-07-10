import { API_BASE_URL } from "@/lib/config";
import { createClient } from "@/lib/supabase/client";

// Calls an agent endpoint on the FastAPI backend and (optionally) logs the
// result to Supabase for the signed-in user.
export async function runAgent<T>(
  endpoint: string,
  payload: unknown,
  meta?: { agentType: string; businessId?: string | null }
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }
  const output = (await res.json()) as T;

  if (meta) {
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        await supabase.from("agent_outputs").insert({
          user_id: user.id,
          business_id: meta.businessId ?? null,
          agent_type: meta.agentType,
          input: payload,
          output,
        });
      }
    } catch (e) {
      console.error("Could not save agent output:", e);
    }
  }

  return output;
}
