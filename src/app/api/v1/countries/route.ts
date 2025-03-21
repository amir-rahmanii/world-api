import type { NextRequest } from "next/server";

import { getApiKeyRecord } from "@/supabase/getApiKeyRecord";
import { saveUserRequest } from "@/supabase/saveUserRequest";
import { filterCountries } from "@/utils/filterCountries";
import { getCountriesByLocale } from "@/utils/getCountriesByLocale";
import { getLocale } from "@/utils/getLocale";
import { getSearchParams } from "@/utils/getSearchParams";

export enum Locale {
  FA = "fa",
  EN = "en",
  AR = "ar",
}

export interface Countries {
  id: number;
  iso2: string;
  iso3: string;
  name: string;
  flag: string;
  capital: string;
  calling_code: number;
  lat: number;
  long: number;
}

export interface SearchParams {
  id: string | null;
  iso2: string | null;
  iso3: string | null;
  name: string | null;
  callingCode: string | null;
}

const defaultLanguage = Locale.FA;

export async function GET(request: NextRequest) {
  const acceptLanguage =
    request.headers.get("Accept-Language") ?? defaultLanguage;
  const locale = getLocale(acceptLanguage);

  const apiKey: string | null = request.headers.get("X-API-Key");
  const searchParams = request.nextUrl.searchParams;
  const AllSearchParams: SearchParams = getSearchParams(searchParams);
  let apiKeyRecord: { api_key: string | null } = { api_key: null };

  try {
    apiKeyRecord = await getApiKeyRecord(apiKey);
  } catch (err) {
    return handleError(request, err as Error, locale, apiKeyRecord, 401);
  }

  try {
    const Countries: Countries[] = getCountriesByLocale(locale);
    const filteredData = filterCountries(Countries, AllSearchParams);

    await saveUserRequest({
      apiKey: apiKeyRecord.api_key,
      path: request.nextUrl.toString(),
      status: 200,
      locale,
    });

    return new Response(JSON.stringify(filteredData, null, 2), {
      status: 200,
      headers: {
        "Content-Language": locale,
      },
    });
  } catch (err) {
    return handleError(request, err as Error, locale, apiKeyRecord, 400);
  }
}

async function handleError(
  request: NextRequest,
  err: Error,
  locale: Locale,
  apiKeyRecord: { api_key: string | null },
  status: number
) {
  const errorMessage =
    err.message || "Something went wrong. Please try again later.";

  await saveUserRequest({
    apiKey: apiKeyRecord.api_key,
    path: request.nextUrl.toString(),
    errorMessage,
    status,
    locale,
  });

  return new Response(
    JSON.stringify({
      error: errorMessage,
      status
    }),
    {
      status,
      headers: {
        "Content-Language": locale,
      },
    }
  );
}
