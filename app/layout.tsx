import type { ReactNode } from "react";
import "@/app/globals.css";
import HtmlDirection from "@/components/HtmlDirection";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <body className="min-h-screen bg-white">
        <HtmlDirection />
        {children}
      </body>
    </html>
  );
}
