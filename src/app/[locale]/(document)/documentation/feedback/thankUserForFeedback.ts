import { EmailTemplate } from "@/app/[locale]/(document)/documentation/feedback/_components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendThankYouEmail(email: string, username: string) {
  try {
    await resend.emails.send({
      from: "World-Api <no-reply@world-api.ir>",
      to: email,
      subject: "با تشکر از بازخورد شما",
      react: EmailTemplate({ username }) as React.ReactElement,
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
