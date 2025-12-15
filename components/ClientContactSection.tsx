"use client";
import dynamic from "next/dynamic";

const ContactSection = dynamic(() => import("./ContactSection"), {
  ssr: false,
});

export default function ClientContactSection() {
  return <ContactSection />;
}
