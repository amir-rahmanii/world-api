import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

import { getTranslations } from 'next-intl/server';
import React from 'react';

import { getUserApiKey } from '@/supabase/getUserApiKey';
import { getUserRequests } from '@/supabase/getUserRequests';

import { Columns } from '../_components/Columns';
import { DataTable } from '../_components/DataTable';

interface Props {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('requestPage.title', { mainTitle: t('mainTitle') }),
  };
}
export default async function RequestsPage({ searchParams }: Props) {
  const currSearchParams = await searchParams;
  const userApiKey = await getUserApiKey();
  const t = await getTranslations('requestPage');

  const page = Number(currSearchParams.page) || 1;
  const limit = Number(currSearchParams.limit) || 10;
  const order =
    currSearchParams.order === 'asc' || currSearchParams.order === 'desc'
      ? currSearchParams.order
      : undefined;
  const userRequests = await getUserRequests(
    page,
    limit,
    userApiKey?.api_key,
    order,
  );

  return (
    <>
      <h1>{t('title')}</h1>
      <div dir="ltr">
        <DataTable
          data={userRequests?.data ?? []}
          limit={limit}
          page={page}
          columns={Columns}
          rowCount={userRequests?.count ?? 0}
        />
      </div>
    </>
  );
}
