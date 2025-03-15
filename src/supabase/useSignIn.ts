import { redirect, usePathname } from "next/navigation";
import { useCallback } from "react";

import { useSupabase } from "./SupabaseProvider";

export const useSignIn = () => {
  const { supabase } = useSupabase();
  const pathname = usePathname();

  const signIn = useCallback(async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `http://localhost:3000/api/auth/callback?next=${encodeURIComponent(pathname)}`,
      },
    });
    if (data.url) {
      redirect(data.url);
    }
  }, [pathname, supabase.auth]);

  return { signIn };
};
