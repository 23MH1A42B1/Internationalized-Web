"use client";

import { useTranslation } from "react-i18next";

export default function ShopSection() {
  const { t } = useTranslation("shop");

  return (
    <section id="shop" className="px-8 py-24 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border p-4 bg-white">
            <div className="h-48 bg-gray-200 mb-4" />
            <h3>{t("item")}</h3>
            <p className="text-sm text-gray-500">$99.00</p>
          </div>
        ))}
      </div>
    </section>
  );
}
