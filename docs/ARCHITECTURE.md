# Architecture

YouthLink is a Next.js 16 (App Router) + TypeScript site. The visual design is the
original Framer design: **Framer's server-rendered markup and CSS are kept verbatim** and
turned into typed React components. Content lives in typed data files, routes are real App
Router routes, and the Framer runtime is replaced by small client components.

```
src/
  app/                      Routes (App Router). One folder per URL segment.
    layout.tsx              <html>/<body>, global CSS, ScrollReveal runtime
    page.tsx                /
    about-us/ our-mission/ leadership/ why-choose-us/ contact-us/ join-youthlink/
    causes/[slug]/ events/[slug]/ projects/[slug]/ career/[slug]/ resources/[slug]/
    resource-category/[slug]/
    sitemap.ts robots.ts not-found.tsx
  components/
    layout/                 PageShell, Header (+ mobile menu, "All pages" dropdown), Footer, Cta
    sections/               Sections shared by several pages (FAQ, Achievements, Causes grid, …)
    cards/                  Card components (CauseCard, EventCard, …)
    pages/<page>/           Sections that only exist on one page (home hero, director block, …)
    runtime/                Client-side behaviour (scroll reveal, breakpoint hook)
  content/                  Typed site content (causes, events, projects, jobs, resources, team, …)
  lib/                      Types, content accessors, metadata and formatting helpers
  styles/
    framer.css              Framer styles shared by every page (fonts, base, shared components)
    interactions.css        Hover / interactive-state styles captured from the live site
    globals.css             Hand-written additions
    templates/<template>.css  Framer styles for one page template, imported by that route
public/images, assets, s    Images and fonts from the Framer export
```

## Page composition

Every route renders `PageShell` (header → page content → CTA → footer) and puts its
sections inside. The shell reproduces Framer's layout template:

```tsx
<PageShell
  header="transparent"
  cta="image"
  contentClassName="framer-HZNR3 …"
  headerTriggerClassName="framer-9w1rhi"
>
  <AboutBanner />…
</PageShell>
```

| Prop                     | Meaning                                                                                                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`header`~~             | `"transparent"` = Framer container `framer-1xm12q0-container` (dark, becomes solid on scroll). `"solid"` = `framer-bgizbu-container`.  |
| `cta`                    | `"image"` = `framer-6ztox7-container`, `"gallery"` = `framer-136km55-container`, `"image-right"` = `framer-lj8en1-container`.          |
| `contentClassName`       | The class list Framer puts on the page content wrapper (per template). Style is always `min-height:100vh;width:auto;display:contents`. |
| `headerTriggerClassName` | Only for `header="transparent"` pages: class of the invisible "Header Trigger" div (`id="header-trigger"`).                            |

Each route imports its template stylesheet, e.g. `import "@/styles/templates/home.css"`.

## Rules for converted markup

1. **Markup is verbatim.** Every element, class name, `data-*` attribute and inline style from
   the Framer export is kept, including the `ssr-variant hidden-*` breakpoint wrappers
   (Framer renders desktop/tablet/phone variants and hides the others with CSS).
2. Allowed changes: hard-coded text/images/links become props or data; internal links use
   `next/link` (`<Link href=… className=…>` with all original attributes); list items get keys;
   `data-framer-page-link-current` is set by the header for the active route only.
3. Elements rendered with `will-change: transform; opacity: 0; transform: …` are Framer's
   scroll-reveal animations. Keep those inline styles; `ScrollReveal` animates them in.
4. Plain `<img>` with Framer's `srcSet`/`sizes` is used on purpose (identical rendering).
5. A **card** component renders the Framer component root (e.g. `<a class="framer-SvcnD …">`).
   The instance wrapper (`div.framer-xxxx-container` with the reveal style) and the
   `ssr-variant` wrappers belong to the section that places the card.
6. Server components by default; `"use client"` only where there is state or browser APIs.

## Runtime behaviour (client components)

| Behaviour                        | Where                                      |
| -------------------------------- | ------------------------------------------ |
| Scroll-reveal animations         | `components/runtime/ScrollReveal.tsx`      |
| Header turns solid after scroll  | `components/layout/Header.tsx`             |
| Phone menu overlay               | `components/layout/Header.tsx`             |
| "All pages" dropdown (desktop)   | `components/layout/Header.tsx`             |
| FAQ / mission accordions         | `components/sections/FaqSection.tsx`, home |
| Testimonial carousels (autoplay) | about-us, why-choose-us page sections      |
| Background video autoplay        | why-choose-us video section                |
| Contact form                     | `components/pages/contact/ContactForm.tsx` |
| Join YouthLink application form  | `components/pages/join/JoinForm.tsx`       |

## Content

All content is typed (`src/lib/types.ts`) and lives in `src/content/*.ts`. Accessors in
`src/lib/content.ts` (`getCauses()`, `getCauseBySlug()`, …) are the only way routes read it,
so swapping in a CMS later only touches that file.

## Shared header and footer

`Header` and `Footer` are rendered once in `src/app/layout.tsx`, inside Framer's layout
template wrapper, so every page (including the 404 page) gets them and they stay mounted
across client-side navigation. The header design follows the route: `headerVariantFor()` in
`src/lib/routes.ts` lists the pages that use the transparent header; all others use the solid
one. `PageShell` now only renders the page content, the overlay target and the CTA block.
