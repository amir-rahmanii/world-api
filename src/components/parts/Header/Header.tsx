import React from "react";

import NavLinks from "../NavLinks/NavLinks";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import GithubAuth from "../GithubAuth/GithubAuth";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-accent bg-card py-4">
      <nav className="container flex items-center justify-between">
        <NavLinks />
        <div className="flex items-center gap-6">
          <ThemeSwitcher />
          <GithubAuth />
        </div>
      </nav>
    </header>
  );
}
