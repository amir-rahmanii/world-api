'use server';

import { getTranslations } from 'next-intl/server';

import { hasSubmittedFeedbackToday } from '@/supabase/getHasSubmittedFeedbackToday';
import { getUser } from '@/supabase/getUser';
import { saveFeedback } from '@/supabase/saveFeedback';

import type { ValidationResult } from './validateFeedback';

import { sendThankYouEmail } from './thankUserForFeedback';
import { validateFeedback } from './validateFeedback';

export async function createFeedback(
  _: ValidationResult,
  formData: FormData,
): Promise<ValidationResult> {
  const t = await getTranslations('documentationPage.feedbackPage.error');
  const feedback = formData.get('feedback')?.toString() ?? '';

  const validation = await validateFeedback(feedback);
  if (!validation.ok) return validation;

  const user = await getUser();
  if (!user) {
    return { ok: false, message: t('userNotFound') };
  }

  const alreadySubmitted = await hasSubmittedFeedbackToday(user.email);
  if (alreadySubmitted) {
    return { ok: false, message: t('alreadySubmitted') };
  }

  try {
    await saveFeedback({ email: user.email, feedback });
  } catch (_error) {
    return { ok: false, message: t('feedbackSaveError') };
  }

  try {
    await sendThankYouEmail(user.email, user.name);
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }

  return { ok: true, message: t('feedbackSuccess') };
}
