import type { NextRequest } from "next/server";

import { createServerSupabaseClient } from "@/supabase/SupabaseServer";

import CountriesEn from "../../../../../../public/Countries-nationalities-en.json";
import CountriesFa from "../../../../../../public/Countries-nationalities-fa.json";
import { filterCountries } from "@/lib/filterCountries";

enum Locale {
  FA = "fa",
  EN = "en",
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  try {
    const supabase = await createServerSupabaseClient();
    const { locale } = await params;
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    const apiKey: string | null = request.headers.get("X-API-Key");

    if (!apiKey?.trim()) {
      return new Response(
        JSON.stringify({
          error:
            "API key is missing. Please provide a valid API key in the request header.",
        }),
        { status: 401 }
      );
    }

    const { data: userApiKey } = await supabase
      .from("Api_keys")
      .select("api_key")
      .eq("api_key", apiKey)
      .single();

    if (apiKey !== userApiKey?.api_key) {
      return new Response(
        JSON.stringify({
          error: "Invalid API key. Please check your API key and try again.",
        }),
        { status: 403 }
      );
    }

    if (!Object.values(Locale).includes(locale as Locale)) {
      return new Response(
        JSON.stringify({
          error: "Invalid locale. Locale must be 'fa' or 'en'.",
        }),
        { status: 400 }
      );
    }

    const Countries = locale === "en" ? CountriesEn : CountriesFa;
    const filteredData = filterCountries(Countries, id);

    return new Response(JSON.stringify(filteredData, null, 2), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify({
        error: "An unexpected error occurred. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
