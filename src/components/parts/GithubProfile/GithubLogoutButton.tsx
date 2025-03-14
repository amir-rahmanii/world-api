"use client";
import TooltipWrapper from "@/components/modules/TooltipWrapper";
import { Button } from "@/components/ui/button";
import { useSupabase } from "@/supabase/SupabaseProvider";
import React from "react";

import Logout from "../../icons/logout.svg";

export default function GithubLogoutButton() {
  const { supabase } = useSupabase();
  return (
    <TooltipWrapper content="خروج">
      <Button
        size="icon"
        variant="outline"
        onClick={() => supabase.auth.signOut()}
      >
        <Logout className="size-4" />
      </Button>
    </TooltipWrapper>
  );
}
