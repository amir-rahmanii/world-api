import Image from 'next/image';
import React from 'react';

import TooltipWrapper from '@/components/shared/TooltipWrapper/TooltipWrapper';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

interface AvatarProps {
  avatarUrl: string;
  name: string;
  tooltip: string;
}

export default function Avatar({ avatarUrl, name, tooltip }: AvatarProps) {
  return (
    <TooltipWrapper content={tooltip}>
      <Button
        asChild
        className="rounded-full p-1 tablet:rounded-md tablet:px-4 tablet:py-2"
        variant="outline"
      >
        <Link href="/dashboard/requests">
          <span className="hidden tablet:block">{name}</span>
          <div className="h-7 w-7 overflow-hidden rounded-full">
            <Image
              height={220}
              width={220}
              alt="profile"
              src={avatarUrl || '/default-avatar.jpg'}
            />
          </div>
        </Link>
      </Button>
    </TooltipWrapper>
  );
}
