import type { ReactNode } from "react";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
