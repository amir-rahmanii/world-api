import type { NextRequest } from 'next/server';

import type { APILocaleType } from '@/constants/apilocales.constant';

import { saveUserRequest } from '@/supabase/saveUserRequest';

async function handleError(
  request: NextRequest,
  err: Error,
  locale: APILocaleType,
  apiKeyRecord: string | null,
  status: number,
) {
  const errorMessage =
    err.message || 'Something went wrong. Please try again later.';

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
        'Content-Language': locale,
      },
    },
  );
}

export default handleError;
