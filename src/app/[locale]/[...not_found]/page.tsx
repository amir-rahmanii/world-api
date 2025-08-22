import type { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('notFoundPage.title', { mainTitle: t('mainTitle') }),
  };
}

const NotFoundCatchAll = () => notFound();

export default NotFoundCatchAll;
