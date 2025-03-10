import { Config } from "@fullstacksjs/config";

const ClientConfig = new Config({
  supabase: Config.object({
    url: Config.string().required(),
    key: Config.string().required(),
  }),
});

export const clientConfig = ClientConfig.parse({
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
});
