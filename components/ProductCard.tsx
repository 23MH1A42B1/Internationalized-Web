// // components/ProductCard.tsx

// "use client";

// import { useTranslation } from "react-i18next";
// import { formatPrice, formatDate } from "@/lib/format";
// import type { Product } from "@/lib/products";

// type ProductCardProps = {
//   product: Product;
//   locale: string;
// };

// export default function ProductCard({
//   product,
//   locale,
// }: ProductCardProps) {
//   const { t } = useTranslation("products");

//   return (
//     <div className="product-card">
//       <h2 className="font-semibold text-lg">
//         {t(`${product.id}.name`)}
//       </h2>

//       <p className="text-sm text-gray-600">
//         {t(`${product.id}.description`)}
//       </p>

//       <p className="mt-2">
//         {formatPrice(product.price, locale)}
//       </p>

//       <p className="text-xs text-gray-400">
//         {formatDate(new Date(product.createdAt), locale)}
//       </p>

//       <button className="btn-primary mt-3 px-4 py-2">
//         Add to Cart
//       </button>
//     </div>
//   );
// }
