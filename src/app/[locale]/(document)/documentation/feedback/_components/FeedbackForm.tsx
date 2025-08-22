'use client';

import { useTranslations } from 'next-intl';
import React, { useActionState } from 'react';

import { cn } from '@/lib/utils';

import { createFeedback } from '../actions';
import { SubmitButton } from './SubmitButton';

export default function FeedbackForm() {
  const t = useTranslations('documentationPage.feedbackPage');
  const [state, action] = useActionState(createFeedback, {
    message: '',
    ok: false,
  });

  return (
    <form className="flex flex-col items-start gap-3" action={action}>
      <label htmlFor="feedback">{t('feedbackLabel')}</label>
      <textarea
        required
        className="w-full rounded-xl px-3 py-2 outline outline-accent focus:outline-foreground"
        id="feedback"
        maxLength={500}
        minLength={10}
        name="feedback"
        inputMode="text"
        placeholder={t('feedbackPlaceholder')}
        rows={4}
      />
      <p
        className={cn(
          'text-sm',
          state.ok ? 'text-green-500/50' : 'text-red-500/50',
        )}
      >
        {state.message}
      </p>
      <SubmitButton submitLabel={t('submit')} loadingLabel={t('submitting')} />
    </form>
  );
}
