import { createServerSupabaseClient } from './SupabaseServer';

export async function checkIfAdmin() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return undefined;
  }

  const adminUserId = process.env.ADMIN_USER_ID;

  if (user.id !== adminUserId) {
    return undefined;
  }

  return user;
}
