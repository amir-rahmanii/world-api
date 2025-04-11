import LoginButton from "@/components/parts/Profile/LoginButton";
import { CodeBlock } from "@/components/shared/CodeBlock/CodeBlock";
import { getUserApiKey } from "@/supabase/getUserApiKey";
import React from "react";

export async function ApiKeyDisplay({ title }: { title: string }) {
  const userApiKey = await getUserApiKey();

  if (userApiKey) {
    return <CodeBlock lang="tex" code={userApiKey.api_key} />;
  }

  return (
    <div className="flex gap-4 my-10 items-center">
      <p className="text-base tablet:text-lg">{title}</p>
      <LoginButton />
    </div>
  );
}
