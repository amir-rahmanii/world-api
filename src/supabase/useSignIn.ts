import { redirect } from "next/navigation";
import { useCallback } from "react";

import { useSupabase } from "./SupabaseProvider";

export const useSignInGithub = () => {
  const { supabase } = useSupabase();

  const signInGithub = useCallback(async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}/api/auth/callback?next=/get-api-key`,
      },
    });
    if (data.url) {
      redirect(data.url);
    }
  }, [supabase.auth]);

  return { signInGithub };
};

export const useSignInGoogle = () => {
  const { supabase } = useSupabase();

  const signInGoogle = useCallback(async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_DOMAIN_URL ?? ""}/api/auth/callback?next=/get-api-key`,
      },
    });
    if (data.url) {
      redirect(data.url);
    }
  }, [supabase.auth]);

  return { signInGoogle };
};
