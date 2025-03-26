import { cache } from "react";

import { createServerSupabaseClient } from "./SupabaseServer";

export interface Profile {
  id: string;
  avatar: string;
  name: string;
}

export const getUser = cache(async (): Promise<Profile | undefined> => {
  const supabase = await createServerSupabaseClient();

  try {
    const { data } = await supabase.auth.getUser();

    if (data.user == null) return undefined;

    return {
      id: data.user.id,
      avatar: data.user.user_metadata["avatar_url"],
      name: data.user.user_metadata["name"],
    };
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
});
