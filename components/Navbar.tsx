"use client";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation("common");

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 font-bold text-xl text-[#6d4aff]">
        ● MultiLang
      </div>

      <ul className="hidden md:flex gap-8 text-gray-700">
        <li>{t("nav.home")}</li>
        <li>{t("nav.about")}</li>
        <li>{t("nav.contact")}</li>
      </ul>

      <LanguageSwitcher />
    </nav>
  );
}
