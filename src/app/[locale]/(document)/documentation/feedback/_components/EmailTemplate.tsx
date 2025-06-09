import * as React from "react";

interface EmailTemplateProps {
  username: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
}) => (
  <div
    style={{
      backgroundColor: "#1b1a1a",
      color: "#ffffff !important",
      padding: "20px",
    }}
  >
    <div dir="rtl">
      <h1>سلام {username} عزیز،</h1>
      <p>
        از اینکه وقت گذاشتید و بازخورد خود را با ما در میان گذاشتید، صمیمانه
        تشکر می‌کنیم.
      </p>
      <p>
        بازخورد شما برای ما بسیار مهم است و به ما کمک می‌کند تا تجربه‌ی بهتری را
        برای شما و دیگر کاربران فراهم کنیم.
      </p>
      <p>
        امیدواریم در آینده هم نظرات و پیشنهادات ارزشمند خود را با ما در میان
        بگذارید.
      </p>
      <p>با احترام،</p>
      <p>
        تیم پشتیبانی
        <br />
        <a href="https://world-api.ir">World-Api.ir</a>
      </p>
    </div>

    <hr />

    <div dir="ltr">
      <h1>Hello {username},</h1>
      <p>
        Thank you so much for taking the time to share your feedback with us.
      </p>
      <p>
        Your feedback is extremely valuable to us and helps us provide a better
        experience for you and other users.
      </p>
      <p>
        We look forward to hearing more of your thoughts and suggestions in the
        future.
      </p>
      <p>Best regards,</p>
      <p>
        The Support Team
        <br />
        <a href="https://world-api.ir">World-Api.ir</a>
      </p>
    </div>
  </div>
);
