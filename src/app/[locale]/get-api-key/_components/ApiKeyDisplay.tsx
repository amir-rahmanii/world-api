import React from 'react';

import LoginButton from '@/components/parts/Profile/LoginButton';
import { CodeBlock } from '@/components/shared/CodeBlock/CodeBlock';
import { getUserApiKey } from '@/supabase/getUserApiKey';

export async function ApiKeyDisplay({ title }: { title: string }) {
  const userApiKey = await getUserApiKey();

  if (userApiKey) {
    return <CodeBlock lang="tex" code={userApiKey.api_key} />;
  }

  return (
    <div className="my-10 flex items-center gap-4">
      <p className="tablet:text-lg text-base">{title}</p>
      <LoginButton />
    </div>
  );
}
