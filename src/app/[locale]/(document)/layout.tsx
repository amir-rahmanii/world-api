import React from 'react';

import PaginationButton from './documentation/_components/PaginationButton';
import SideBar from './documentation/_components/SideBar';

export default function DocumantionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wide:grid-cols-[auto_1fr] grid grid-cols-1 gap-6">
      <div className="wide:sticky wide:top-24 wide:h-[calc(100vh-8rem)]">
        <SideBar />
      </div>
      <div className="border-accent desktop:p-6 wide:p-8 flex flex-col rounded-lg border p-4">
        {children}
        <PaginationButton />
      </div>
    </div>
  );
}
