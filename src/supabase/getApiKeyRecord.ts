import { createServerSupabaseClient } from './SupabaseServer';

export const getApiKeyRecord = async (apiKey: string | null) => {
  if (!apiKey) {
    const error =
      'API key is missing or invalid. Please provide a valid API key.';
    throw new Error(error);
  }

  const supabase = await createServerSupabaseClient();

  const { data: apiKeyRecord, error } = await supabase
    .from('Api_keys')
    .select('api_key')
    .eq('api_key', apiKey)
    .single();

  if (error) {
    throw new Error(
      'API key is missing or invalid. Please provide a valid API key.',
    );
  }

  return apiKeyRecord.api_key as string;
};
