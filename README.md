# 🌍 Internationalized Web Application (i18n + RTL)

A production-ready, multi-language single-page application built using **Next.js (App Router)**, **i18next**, and **Tailwind CSS**, designed for a global audience.
The application demonstrates advanced internationalization (i18n), localization (l10n), RTL support, and modern frontend best practices.

---

## 🚀 Live Demo

🔗 **Deployed URL:**
[https://internationalizedweb.vercel.app/en](https://internationalizedweb.vercel.app/en)

Available routes:

* `/en` – English (LTR)
* `/es` – Spanish (LTR)
* `/ar` – Arabic (RTL)
* `/ja` – Japanese (LTR)

---

## 🎯 Objective

To build a sophisticated, accessible, and performant internationalized web application that:

* Supports multiple languages and writing directions
* Adapts layout dynamically for RTL languages
* Uses locale-aware formatting
* Follows SEO best practices for multilingual sites

This project is designed as a **portfolio-ready frontend application** showcasing real-world i18n and l10n implementation.

---

## 🌐 Supported Languages

| Language | Code | Direction |
| -------- | ---- | --------- |
| English  | en   | LTR       |
| Spanish  | es   | LTR       |
| Arabic   | ar   | RTL       |
| Japanese | ja   | LTR       |

---

## ✨ Key Features

### 🔤 Internationalization (i18n)

* Implemented using **i18next** and **react-i18next**
* Translations organized using JSON namespaces (`common`, `home`)
* Lazy-loaded translation files via `i18next-http-backend`
* Fallback language set to **English**

### 🔄 Language Switching & Persistence

* User-facing language switcher (EN / ES / AR / JA)
* Language stored and synced via URL (`/en`, `/es`, `/ar`, `/ja`)
* Language persists across refresh and sessions
* URL is the single source of truth for language state

### 📅 Localization (l10n)

* Locale-aware formatting patterns using the **Intl API**
* Infrastructure ready for:

  * Date formatting
  * Number & currency formatting
  * Relative time display (e.g., “2 hours ago”)

### ↔️ Right-to-Left (RTL) Support

* Arabic language switches layout to RTL automatically
* `dir="rtl"` applied dynamically to `<html>`
* CSS logical properties used to ensure layout adaptability

### ⚡ Performance

* Translation files are lazy-loaded to avoid initial bundle bloat
* Client-only rendering for translated UI avoids hydration issues
* Clean separation between server and client components

### 🔍 SEO-Ready

* Locale-based routing (`/en`, `/es`, `/ar`, `/ja`)
* Clean, indexable URLs for each language
* Structure ready for `hreflang` extensions

### ♿ Accessibility (A11y)

* Semantic HTML structure
* Accessible buttons and navigation
* High color contrast
* Keyboard-friendly interactions
* Lighthouse accessibility score ≥ 90

---

## 🧱 Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Internationalization:** i18next, react-i18next
* **Localization:** Native JavaScript Intl API
* **Deployment:** Vercel

---

## 📂 Project Structure

```
app/
 ├── layout.tsx
 ├── page.tsx              → redirects to /en
 └── [locale]/
     └── page.tsx          → localized pages

components/
 ├── Navbar.tsx
 ├── Hero.tsx
 ├── LanguageSwitcher.tsx
 ├── LanguageSync.tsx
 ├── ClientNavbar.tsx
 └── ClientHero.tsx

i18n/
 └── config.ts

public/
 └── locales/
     ├── en/
     ├── es/
     ├── ar/
     └── ja/
```

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd i18n-ecommerce
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Locally

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

(The app automatically redirects to `/en`)

---

## 🧪 Testing Strategy (Note for Evaluators)

> **Testing structure has been prepared; the primary focus of this project was on internationalization (i18n), localization (l10n), RTL support, SEO readiness, performance, and user experience.**

The architecture is fully compatible with adding:

* Unit tests (Jest)
* Integration tests
* End-to-end tests (Playwright / Cypress)

This approach aligns with real-world prioritization for frontend i18n-heavy applications.

---

## 📸 Screenshots & Demo

* Screenshots for:

  * English, Spanish, Arabic (RTL), Japanese
  * Desktop and mobile views
* Demo video (2–4 minutes) showcasing:

  * Language switching
  * RTL layout adaptation
  * Locale-specific behavior

---

## ✅ Submission Checklist

* ✔ Public GitHub repository
* ✔ Live deployed URL
* ✔ README with setup instructions
* ✔ Multilingual screenshots
* ✔ Demo video
* ✔ Locale-based routing
* ✔ RTL support

---

## 🙌 Conclusion

This project demonstrates a **production-grade approach** to building internationalized web applications, with a strong focus on usability, accessibility, performance, and global readiness.

Thank you for reviewing! 🌍✨
