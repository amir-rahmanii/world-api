import { CodeBlock } from "@/components/modules/CodeBlock";
import GithubLoginButton from "@/components/parts/Profile/LoginButton";
import { getUserApiKey } from "@/supabase/getUserApiKey";
import React from "react";

export async function ApiKeyDisplay() {
  const userApiKey = await getUserApiKey();

  if (userApiKey) {
    return <CodeBlock lang="tex" code={userApiKey.api_key} />;
  }

  return (
    <div className="flex gap-4 my-10 items-center">
      <p className="text-base tablet:text-lg">
        برای دریافت کلید API ابتدا وارد شوید.
      </p>
      <GithubLoginButton />
    </div>
  );
}
