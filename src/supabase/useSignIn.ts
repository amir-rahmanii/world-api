import { redirect } from "next/navigation";
import { useCallback } from "react";

import { useSupabase } from "./SupabaseProvider";

export const useSignIn = () => {
  const { supabase } = useSupabase();

  const signIn = useCallback(async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: "http://localhost:3000/api/auth/callback" },
    });
    if (data.url) {
      redirect(data.url);
    }
  }, [supabase.auth]);

  return { signIn };
};
