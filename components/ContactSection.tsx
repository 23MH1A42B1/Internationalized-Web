"use client";

import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation("contact");

  return (
    <section id="contact" className="px-8 py-24 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">
        {t("title")}
      </h2>

      <form className="max-w-md space-y-4">
        <input placeholder={t("name")} className="w-full border p-2" />
        <input placeholder={t("email")} className="w-full border p-2" />
        <textarea placeholder={t("message")} className="w-full border p-2" />
        <button className="btn-primary">
          {t("send")}
        </button>
      </form>
    </section>
  );
}
