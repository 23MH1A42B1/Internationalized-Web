// lib/format.ts

export function formatPrice(
  value: number,
  locale: string
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: locale === "ja" ? "JPY" : "USD",
  }).format(value);
}

export function formatDate(
  date: Date,
  locale: string
): string {
  if (isNaN(date.getTime())) {
    return ""; // prevent crash
  }

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}
