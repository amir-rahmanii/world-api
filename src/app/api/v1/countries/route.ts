import type { NextRequest } from 'next/server';

import { API_LOCALES } from '@/constants/apilocales.constant';
import { getApiKeyRecord } from '@/supabase/getApiKeyRecord';
import { saveUserRequest } from '@/supabase/saveUserRequest';
import { filterCountries } from '@/utils/filterCountries';
import { getCountriesByLocale } from '@/utils/getCountriesByLocale';
import { getLocale } from '@/utils/getLocale';
import { getSearchParams } from '@/utils/getSearchParams';
import handleError from '@/utils/handleError';

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

export async function GET(request: NextRequest) {
  const acceptLanguage =
    request.headers.get('Accept-Language') ?? API_LOCALES.Persian;
  const locale = getLocale(acceptLanguage);
  const searchParams = request.nextUrl.searchParams;
  const AllSearchParams: SearchParams = getSearchParams(searchParams);

  const apiKey: string | null = request.headers.get('X-API-Key');
  let apiKeyRecord: string | null = null;

  try {
    apiKeyRecord = await getApiKeyRecord(apiKey);
  } catch (err) {
    return handleError(request, err as Error, locale, apiKeyRecord, 401);
  }

  try {
    const Countries: Countries[] = getCountriesByLocale(locale);
    const filteredData = filterCountries(Countries, AllSearchParams);

    await saveUserRequest({
      apiKey: apiKeyRecord,
      path: request.nextUrl.toString(),
      status: 200,
      locale,
    });

    return new Response(JSON.stringify(filteredData, null, 2), {
      status: 200,
      headers: {
        'Content-Language': locale,
      },
    });
  } catch (err) {
    return handleError(request, err as Error, locale, apiKeyRecord, 400);
  }
}
