"use client";

import { usePathname, useRouter } from "next/navigation";
import i18n from "@/i18n/config";

const languages = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "ar", label: "AR" },
  { code: "ja", label: "JA" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: string) => {
    // Change i18n language
    i18n.changeLanguage(lang);

    // Persist language
    localStorage.setItem("i18nextLng", lang);

    // Update URL locale
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className="
            px-3 py-1.5
            rounded-md
            border border-gray-300
            bg-white
            text-gray-800
            text-sm
            font-medium
            shadow-sm
            hover:bg-[#6d4aff]
            hover:text-white
            hover:border-[#6d4aff]
            focus:outline-none
            focus:ring-2
            focus:ring-[#6d4aff]
            transition
          "
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
