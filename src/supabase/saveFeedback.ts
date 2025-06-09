import { createServerSupabaseClient } from "./SupabaseServer";

interface SaveFeedbackParam {
  feedback: string;
  email: string;
}

export const saveFeedback = async (userFeedback: SaveFeedbackParam) => {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from("Feedbacks").insert([
    {
      email: userFeedback.email,
      feedback: userFeedback.feedback,
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }

  return !!data;
};
