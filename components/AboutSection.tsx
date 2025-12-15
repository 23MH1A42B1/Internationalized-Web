"use client";

import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation("about");

  return (
    <section id="about" className="px-8 py-24 bg-white">
      <h2 className="text-3xl font-bold mb-4">
        {t("title")}
      </h2>
      <p className="max-w-3xl text-gray-600">
        {t("content")}
      </p>
    </section>
  );
}
