import React from 'react';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import NavigationBar from '../Navigation/NavigationBar';
import { Profile } from '../Profile/Profile';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-accent bg-background py-4">
      <nav className="flex items-center justify-between px-3 tablet:px-4 desktop:container desktop:px-0">
        <NavigationBar />
        <div className="flex items-center gap-3 wide:gap-5">
          <div className="hidden desktop:block">
            <LanguageSwitcher />
          </div>
          <ThemeSwitcher />
          <Profile />
        </div>
      </nav>
    </header>
  );
}
