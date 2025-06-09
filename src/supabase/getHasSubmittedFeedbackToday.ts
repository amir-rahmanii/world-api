import { createServerSupabaseClient } from "./SupabaseServer";

export async function hasSubmittedFeedbackToday(
  email: string,
): Promise<boolean> {
  const supabase = await createServerSupabaseClient();

  const today = new Date().toISOString().split("T")[0];
  const startOfDay = `${today}T00:00:00`;
  const endOfDay = `${today}T23:59:59.999Z`;

  const { data } = await supabase
    .from("Feedbacks")
    .select("id")
    .eq("email", email)
    .gte("created_at", startOfDay)
    .lt("created_at", endOfDay)
    .maybeSingle();

  return !!data;
}
