'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { SIDEBAR_NAV_LINKS } from '@/constants/sideBar.constant';
import { useAccordionValue } from '@/hooks/useAccordionValue';
import { Link } from '@/i18n/navigation';

export default function SideBar() {
  const t = useTranslations('documentationPage.sideBar');
  const { pathName, accordionValue, setAccordionValue } = useAccordionValue();
  return (
    <div>
      <ul className="wide:w-[280px] border-accent flex w-full flex-col rounded-lg border p-4">
        <Accordion
          type="single"
          value={accordionValue}
          collapsible
          onValueChange={setAccordionValue}
        >
          {SIDEBAR_NAV_LINKS.map((nav) => (
            <AccordionItem key={nav.id} value={`item-${nav.id}`}>
              <AccordionTrigger>
                {t(`sideBarNavLink.titles.${nav.title}`)}
              </AccordionTrigger>
              {nav.children.map((navChild) => (
                <AccordionContent className="pb-2" key={navChild.title}>
                  <Button
                    asChild={!navChild.new}
                    className="w-full justify-start text-start text-sm"
                    disabled={navChild.new}
                    variant={pathName === navChild.path ? 'sideBar' : 'link'}
                  >
                    <Link
                      className="flex w-full flex-wrap items-center justify-between"
                      href={navChild.path}
                    >
                      {t(`sideBarNavLink.links.${navChild.title}`)}
                      {navChild.new && (
                        <span className="text-primary text-[10px]">
                          {t('comingSoon')}
                        </span>
                      )}
                    </Link>
                  </Button>
                </AccordionContent>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </ul>
    </div>
  );
}
