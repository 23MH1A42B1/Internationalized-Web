"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import i18n from "@/i18n/config";

export default function LanguageSync() {
  const params = useParams();
  const locale = params?.locale as string;

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return null;
}
