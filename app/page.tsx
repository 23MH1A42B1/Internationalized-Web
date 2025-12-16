import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SUPPORTED_LANGS = ["en", "es", "ar", "ja"];

export default function Home() {
  const headersList = headers();
  const acceptLanguage = headersList.get("accept-language");

  let detectedLang = "en"; // fallback

  if (acceptLanguage) {
    const browserLang = acceptLanguage.split(",")[0].split("-")[0];

    if (SUPPORTED_LANGS.includes(browserLang)) {
      detectedLang = browserLang;
    }
  }

  redirect(`/${detectedLang}`);
}
