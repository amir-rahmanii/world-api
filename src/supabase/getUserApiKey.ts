import { cache } from "react";

import { getUser } from "./getUser";
import { createServerSupabaseClient } from "./SupabaseServer";

export const getUserApiKey = cache(async () => {
  const supabase = await createServerSupabaseClient();

  try {
    const user = await getUser();
    if (user == null) return undefined;

    const { data: userApiKey } = await supabase
      .from("Api_keys") 
      .select("api_key") 
      .eq("user_id", user.id)
      .single();

    return userApiKey;
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
});
