import React from 'react';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import NavigationBar from '../Navigation/NavigationBar';
import { Profile } from '../Profile/Profile';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

export default function Header() {
  return (
    <header className="border-accent bg-background sticky top-0 z-40 border-b py-4">
      <nav className="desktop:container tablet:px-4 desktop:px-0 flex items-center justify-between px-3">
        <NavigationBar />
        <div className="wide:gap-5 flex items-center gap-3">
          <div className="desktop:block hidden">
            <LanguageSwitcher />
          </div>
          <ThemeSwitcher />
          <Profile />
        </div>
      </nav>
    </header>
  );
}
