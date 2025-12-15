"use client";

import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation("home");

  return (
    <section
      className="
        min-h-screen
        flex flex-col
        justify-center
        items-center
        text-center
        px-6
        bg-gradient-to-br
        from-[#2b0a3d]
        via-[#5b1a8b]
        to-[#2b0a3d]
        text-white
      "
    >
      {/* Badge */}
      <span
        className="
          mb-6
          px-4 py-1
          rounded-full
          text-sm
          bg-white/10
          border border-white/20
        "
      >
        {t("hero.badge")}
      </span>

      {/* Title */}
      <h1
        className="
          text-4xl
          md:text-6xl
          font-extrabold
          max-w-4xl
          leading-tight
        "
      >
        {t("hero.title")}
      </h1>

      {/* Subtitle */}
      <p
        className="
          mt-6
          text-lg
          text-white/80
          max-w-2xl
        "
      >
        {t("hero.subtitle")}
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <button
          className="
            px-6 py-3
            rounded-lg
            bg-[#6d4aff]
            font-semibold
            shadow-md
            hover:bg-[#5a3be0]
            transition
          "
        >
          {t("hero.primary")}
        </button>

        <button
          className="
            px-6 py-3
            rounded-lg
            bg-white/10
            border border-white/20
            hover:bg-white/20
            transition
          "
        >
          ▶ {t("hero.secondary")}
        </button>
      </div>

      {/* Stats */}
      <div
        className="
          mt-16
          grid
          grid-cols-1
          md:grid-cols-3
          gap-12
          text-center
        "
      >
        <div>
          <p className="text-3xl font-bold">50K+</p>
          <p className="text-white/70">
            {t("hero.stats.clients")}
          </p>
        </div>

        <div>
          <p className="text-3xl font-bold">120+</p>
          <p className="text-white/70">
            {t("hero.stats.projects")}
          </p>
        </div>

        <div>
          <p className="text-3xl font-bold">99%</p>
          <p className="text-white/70">
            {t("hero.stats.satisfaction")}
          </p>
        </div>
      </div>
    </section>
  );
}
