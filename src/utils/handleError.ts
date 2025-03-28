import type { LanguageType } from "@/types/locale.types";
import type { NextRequest } from "next/server";

import { saveUserRequest } from "@/supabase/saveUserRequest";

async function handleError(
  request: NextRequest,
  err: Error,
  locale: LanguageType,
  apiKeyRecord: string | null,
  status: number,
) {
  const errorMessage =
    err.message || "Something went wrong. Please try again later.";

  await saveUserRequest({
    apiKey: apiKeyRecord,
    path: request.nextUrl.toString(),
    errorMessage,
    status,
    locale,
  });

  return new Response(
    JSON.stringify({
      error: errorMessage,
      status,
    }),
    {
      status,
      headers: {
        "Content-Language": locale,
      },
    },
  );
}

export default handleError;
