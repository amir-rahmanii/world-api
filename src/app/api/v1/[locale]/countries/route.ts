import type { Locale } from "@/utils/getCountriesByLocale";
import type { NextRequest } from "next/server";

import { getApiKeyFromDatabase } from "@/supabase/getApiKeyFromDatabase";
import { filterCountries } from "@/utils/filterCountries";
import { getCountriesByLocale } from "@/utils/getCountriesByLocale";
import { getSearchParams } from "@/utils/getSearchParams";

export interface Countries {
  id: number;
  iso2: string;
  iso3: string;
  name: string;
  flag: string;
  capital: string;
  calling_code?: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ locale: Locale }> }
) {
  try {
    const { locale } = await params;
    const apiKey: string | null = request.headers.get("X-API-Key");
    const searchParams = request.nextUrl.searchParams;
    const AllSearchParams = getSearchParams(searchParams);

    if (!apiKey?.trim()) {
      return new Response(
        JSON.stringify({
          error:
            "API key is missing. Please provide a valid API key in the request header.",
        }),
        { status: 401 }
      );
    }

    const userApiKey = await getApiKeyFromDatabase(apiKey);

    if (apiKey !== userApiKey) {
      return new Response(
        JSON.stringify({
          error: "Invalid API key. Please check your API key and try again.",
        }),
        { status: 403 }
      );
    }

    const Countries: Countries[] = getCountriesByLocale(locale);

    const filteredData = filterCountries(Countries, AllSearchParams);

    return new Response(JSON.stringify(filteredData, null, 2), {
      status: 200,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error:
          (err as Error).message ||
          "Something went wrong. Please try again later.",
      }),
      { status: 400 }
    );
  }
}
