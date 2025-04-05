import type { APILocaleType } from "@/constants/apilocales";

import { createServerSupabaseClient } from "./SupabaseServer";

interface SaveUserRequestParam {
  path: string;
  apiKey: string | null;
  status: number;
  errorMessage?: string | null;
  locale: APILocaleType | null;
}

export const saveUserRequest = async (userRequest: SaveUserRequestParam) => {
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase.from("User_requests").insert([
    {
      api_key: userRequest.apiKey,
      path: userRequest.path,
      status: userRequest.status,
      error_message: userRequest.errorMessage ?? null,
      locale: userRequest.locale ?? null,
    },
  ]);

  if (error) {
    throw new Error("Failed to save request user to database.");
  }
};
