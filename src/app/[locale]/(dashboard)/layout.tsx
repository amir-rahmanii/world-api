import { redirect } from "@/i18n/navigation";
import { checkIfAdmin } from "@/supabase/checkIfAdmin";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await checkIfAdmin();

  return user ? children : redirect({ href: "/", locale: "en" });
}
