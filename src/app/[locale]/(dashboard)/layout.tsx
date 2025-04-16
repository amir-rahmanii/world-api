import { redirect } from "@/i18n/navigation";
import { createServerSupabaseClient } from "@/supabase/SupabaseServer";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect({ href: "/", locale: "en" });
  }

  const adminUserId = process.env.ADMIN_USER_ID;

  if (user.id !== adminUserId) {
    return redirect({ href: "/", locale: "en" });
  }

  return children;
}
