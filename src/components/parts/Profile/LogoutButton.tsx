'use client';
import React from 'react';

import Logout from '@/assets/icons/shared/logout.svg';
import TooltipWrapper from '@/components/shared/TooltipWrapper/TooltipWrapper';
import { Button } from '@/components/ui/button';
import { useSupabase } from '@/supabase/SupabaseProvider';

export default function LogoutButton({ tooltip }: { tooltip: string }) {
  const { supabase } = useSupabase();
  return (
    <TooltipWrapper content={tooltip}>
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
