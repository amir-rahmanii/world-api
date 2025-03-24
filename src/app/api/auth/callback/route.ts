import { createServerSupabaseClient } from "@/supabase/SupabaseServer";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      const userId = data.user.id;

      const { error: apiKeyError } = await supabase
        .from("Api_keys")
        .select("api_key")
        .eq("user_id", userId)
        .single();

      if (apiKeyError) {
        const newApiKey = crypto.randomUUID();
        await supabase
          .from("Api_keys")
          .insert({ user_id: userId, api_key: newApiKey });
      }

      const forwardedHost = request.headers.get("x-forwarded-host");

      const isLocalEnv = process.env.NODE_ENV === "development";
      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  return NextResponse.redirect(`${origin}${next}`);
}
