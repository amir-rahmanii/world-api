import { getUser } from "@/supabase/getUser";
import React from "react";

import Avatar from "./Avatar";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export async function Profile() {
  const profile = await getUser();

  if (profile) {
    return (
      <>
        <Avatar avatar={profile.avatar} name={profile.name} />
        <LogoutButton />
      </>
    );
  }

  return <LoginButton />;
}
