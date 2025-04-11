import { getUser } from "@/supabase/getUser";
import { getTranslations } from "next-intl/server";
import React from "react";

import Avatar from "./Avatar";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export async function Profile() {
  const profile = await getUser();
  const t = await getTranslations("auth");

  if (profile) {
    return (
      <>
        <Avatar
          avatarUrl={profile.avatar}
          name={profile.name}
          tooltip={t("myProfile")}
        />
        <LogoutButton tooltip={t("logOut")} />
      </>
    );
  }

  return <LoginButton />;
}
