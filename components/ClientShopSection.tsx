"use client";
import dynamic from "next/dynamic";

const ShopSection = dynamic(() => import("./ShopSection"), {
  ssr: false,
});

export default function ClientShopSection() {
  return <ShopSection />;
}
