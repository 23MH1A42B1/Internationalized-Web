"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function HtmlDirection() {
  const params = useParams();
  const locale = params?.locale as string;

  useEffect(() => {
    if (!locale) return;

    const isRTL = locale === "ar";

    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
