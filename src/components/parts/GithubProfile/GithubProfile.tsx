import { getUser } from "@/supabase/getUser";
import React from "react";

import GithubAvatar from "./GithubAvatar";
import GithubLoginButton from "./GithubLoginButton";
import GithubLogoutButton from "./GithubLogoutButton";

export async function GithubProfile() {
  const profile = await getUser();

  if (profile) {
    return (
      <>
        <GithubAvatar avatar={profile.avatar} name={profile.name} />
        <GithubLogoutButton />
      </>
    );
  }

  return <GithubLoginButton />;
}
