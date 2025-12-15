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
    // 1. Change i18n language
    i18n.changeLanguage(lang);

    // 2. Save language
    localStorage.setItem("i18nextLng", lang);

    // 3. Change URL
    const parts = pathname.split("/");
    parts[1] = lang;
    router.push(parts.join("/"));
  };

  return (
    <div className="flex gap-2">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => changeLanguage(l.code)}
          className="border px-2 py-1 text-sm"
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
