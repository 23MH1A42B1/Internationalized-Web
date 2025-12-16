"use client";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation("common");

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-xl text-[#6d4aff] text-start">
        ● MultiLang
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-gray-700 text-start">
        <li className="cursor-pointer hover:text-[#6d4aff] transition">
          {t("nav.home")}
        </li>
        <li className="cursor-pointer hover:text-[#6d4aff] transition">
          {t("nav.about")}
        </li>
        <li className="cursor-pointer hover:text-[#6d4aff] transition">
          {t("nav.contact")}
        </li>
      </ul>

      {/* Language Switcher */}
      <LanguageSwitcher />
    </nav>
  );
}
