import type { Locale } from "@/utils/getCountriesByLocale";
import type { NextRequest } from "next/server";

import { getApiKeyRecord } from "@/supabase/getApiKeyRecord";
import { saveUserRequest } from "@/supabase/saveUserRequest";
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
  calling_code: string;
}

export interface SearchParams {
  id: string | null;
  iso2: string | null;
  iso3: string | null;
  name: string | null;
  callingCode: string | null;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ locale: Locale }> }
) {
  const { locale } = await params;
  const apiKey: string | null = request.headers.get("X-API-Key");
  const searchParams = request.nextUrl.searchParams;
  const AllSearchParams: SearchParams = getSearchParams(searchParams);
  let apiKeyRecord = null;

  try {
    apiKeyRecord = await getApiKeyRecord(apiKey);
  } catch (err) {
    const errorMessage = (err as Error).message || null;

    await saveUserRequest({
      apiKey: apiKeyRecord?.api_key ?? null,
      path: request.nextUrl.toString(),
      errorMessage,
      status: 401,
    });

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 401,
    });
  }

  try {
    const Countries: Countries[] = getCountriesByLocale(locale);
    const filteredData = filterCountries(Countries, AllSearchParams);

    await saveUserRequest({
      apiKey: apiKeyRecord.api_key,
      path: request.nextUrl.toString(),
      status: 200,
    });

    return new Response(JSON.stringify(filteredData, null, 2), {
      status: 200,
    });
  } catch (err) {
    const errorMessage =
      (err as Error).message || "Something went wrong. Please try again later.";

    await saveUserRequest({
      apiKey: apiKeyRecord.api_key,
      path: request.nextUrl.toString(),
      status: 400,
      errorMessage,
    });

    return new Response(
      JSON.stringify({
        error: errorMessage,
      }),
      { status: 400 }
    );
  }
}
