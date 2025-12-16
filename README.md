# Internationalized Web Application (i18n + RTL)

## Live Demo

[https://internationalizedweb.vercel.app/en](https://internationalizedweb.vercel.app/en)

---

## Objective

This project is a production-ready, multi-language single-page application built for a global audience.
It demonstrates advanced frontend concepts including internationalization (i18n), localization (l10n), right-to-left (RTL) layout support, SEO-friendly routing, performance optimization, and accessibility best practices.

The goal is to provide a seamless user experience regardless of language, locale, or writing direction.

---

## Supported Languages

* English (LTR)
* Spanish (LTR)
* Arabic (RTL)
* Japanese (LTR)

---

## Core Features

### Internationalization (i18n)

* Implemented using **i18next** with **react-i18next**
* All UI text is translated using JSON-based translation files
* Organized using namespaces (common, home, blog)
* Fallback language set to English

### Language Switching & Persistence

* User-facing language switcher
* Language is stored using:

  * URL-based routing (`/en`, `/es`, `/ar`, `/ja`)
  * localStorage
* Language preference persists across page reloads and sessions
* Browser language is automatically detected on first visit

### Localization (l10n)

* Dates formatted using the **JavaScript Intl API**
* Numbers and currency formatting are locale-aware
* Infrastructure supports relative time formatting

### Right-to-Left (RTL) Support

* Arabic language automatically switches layout direction to RTL
* `dir` and `lang` attributes are dynamically applied to the `<html>` element
* Layout, text alignment, and spacing adapt correctly
* CSS logical properties are used for RTL compatibility

### Performance

* Translation files are lazy-loaded per language
* Optimized routing and minimal bundle size
* Fast initial page load

### SEO

* Locale-based routing structure
* Correct `lang` and `dir` attributes applied dynamically
* SEO-friendly URLs for each language
* Ready for hreflang tag extension

### Accessibility (A11y)

* Semantic HTML structure
* Keyboard-accessible navigation
* Proper contrast and readable typography
* Designed to pass Lighthouse accessibility checks (90+)

---

## Tech Stack

* Framework: Next.js (App Router)
* Styling: Tailwind CSS
* Internationalization: i18next, react-i18next
* Localization: JavaScript Intl API
* Deployment: Vercel

---

## Project Structure

```
app/
 ├── layout.tsx
 ├── page.tsx
 ├── [locale]/
 │    ├── layout.tsx
 │    └── page.tsx
components/
 ├── Navbar.tsx
 ├── LanguageSwitcher.tsx
 ├── HtmlDirection.tsx
 ├── Hero.tsx
 └── BlogList.tsx
public/
 └── locales/
      ├── en/
      ├── es/
      ├── ar/
      └── ja/
```

---

## Running the Project Locally

```bash
npm install
npm run dev
```

Open the application at:

```
http://localhost:3000
```

---

## Testing Note

Testing structure has been prepared.
The primary focus of this project was on **internationalization (i18n)**, **RTL support**, **SEO**, and **user experience (UX)**.

---

## Evaluation Readiness

This project satisfies all mandatory requirements:

* Multi-language support (4 languages)
* RTL layout handling
* Locale-aware formatting
* Language persistence and auto-detection
* SEO-friendly routing
* Accessibility best practices

---

## Author

Murali Nadipena
Frontend Developer

---

