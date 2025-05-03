import type { UserRequest } from "@/app/[locale]/(dashboard)/dashboard/_components/Columns";

import { cache } from "react";

import { createServerSupabaseClient } from "./SupabaseServer";

type GetUserRequest =
  | {
      data: UserRequest[] | null;
      count: number | null;
    }
  | undefined;

export const getUserRequests = cache(
  async (
    page = 1,
    limit = 20,
    apiKey?: string,
    order?: "asc" | "desc",
  ): Promise<GetUserRequest> => {
    const supabase = await createServerSupabaseClient();

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    try {
      let query = supabase
        .from("User_requests")
        .select("*", { count: "exact" })
        .range(from, to)
        .order("created_at", { ascending: order === "asc" });

      if (apiKey) {
        query = query.ilike("api_key", `%${apiKey}%`);
      }

      const { data, count } = await query;

      return { data, count };
    } catch (error) {
      console.error("Error fetching user requests:", error);
      return undefined;
    }
  },
);
