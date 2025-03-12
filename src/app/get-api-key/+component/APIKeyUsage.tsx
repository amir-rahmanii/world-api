import { CodeBlock } from "@/components/modules/CodeBlock";
import React from "react";

export default function APIKeyUsage() {
  return (
    <div>
      <h3 className="text-3xl font-extrabold pb-2">نحوه استفاده از API Key</h3>
      <p>
        برای استفاده از API، شما نیاز به یک <strong>API Key</strong> دارید که
        مشابه یک <strong>رمز عبور</strong> عمل می‌کند و دسترسی شما به سرویس را
        تأیید می‌کند. این کلید به شما اجازه می‌دهد که به داده‌ها و ویژگی‌های
        مختلف سرویس دسترسی پیدا کنید و تمامی درخواست‌ها باید با استفاده از آن
        انجام شوند.
      </p>

      <h4 className="text-xl font-bold mt-4 pb-2">
        📌 چرا از <code>X-API-Key</code> استفاده کنیم؟
      </h4>
      <p>
        <code>X-API-Key</code> یک روش استاندارد برای ارسال کلید احراز هویت است
        که بسیاری از APIها از آن پشتیبانی می‌کنند. این روش:
      </p>
      <ul className="list-disc pr-5">
        <li>
          <strong>امن‌تر</strong> از ارسال کلید در پارامترهای URL است.
        </li>
        <li>
          درخواست‌ها را <strong>ساده‌تر</strong> و خواناتر می‌کند.
        </li>
        <li>در بسیاری از APIهای مدرن توصیه می‌شود.</li>
      </ul>

      <h4 className="text-xl font-bold mt-4 pb-2">
        🚀 نحوه ارسال API Key در درخواست HTTP
      </h4>
      <p>
        برای ارسال API Key در <strong>X-API-Key</strong>، کافی است مقدار آن را
        در بخش
        <code> headers </code> قرار دهید:
      </p>

      <CodeBlock
        code={`
fetch("https://api.example.com/data", {
method: "GET",
headers: {
  "X-API-Key": "your-api-key",  // 🔴 کلید را اینجا جایگزین کنید
  "Content-Type": "application/json"
}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
`}
      />

      <h4 className="text-xl font-bold mt-4 pb-2">
        ⚠️ نکات امنیتی مهم در استفاده از API Key
      </h4>
      <ul className="list-disc pr-5">
        <li>هرگز API Key را در کدهای عمومی (مانند GitHub) قرار ندهید.</li>
        <li>
          از متغیرهای محیطی (<code>.env</code>) برای نگهداری کلید استفاده کنید.
        </li>
      </ul>
    </div>
  );
}
