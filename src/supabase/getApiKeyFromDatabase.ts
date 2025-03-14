import { createServerSupabaseClient } from "./SupabaseServer";

export const getApiKeyFromDatabase = async (apiKey: string) => {
  const supabase = await createServerSupabaseClient();
  const { data: userApiKey, error } = await supabase
    .from("Api_keys")
    .select("api_key")
    .eq("api_key", apiKey)
    .single();

  if (error) {
    throw new Error("Failed to fetch API key from database.");
  }

  return userApiKey.api_key;
};
