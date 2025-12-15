"use client";

import { useTranslation } from "react-i18next";

const products = [1, 2, 3, 4, 5, 6];

export default function ProductGrid() {
  const { t } = useTranslation("products");

  return (
    <section className="px-8 py-16">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p} className="border p-4">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="Product"
            />
            <h3 className="mt-4 font-medium">
              {t("itemName")}
            </h3>
            <p className="text-sm text-gray-500">$99.00</p>
          </div>
        ))}
      </div>
    </section>
  );
}
