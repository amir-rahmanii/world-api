import { redirect } from '@/i18n/navigation';
import { getUser } from '@/supabase/getUser';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect({
      href: '/',
      locale: 'fa',
    });
  }

  return children;
}
