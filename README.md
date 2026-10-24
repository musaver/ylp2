# YouthLink

The YouthLink community website as a Next.js 16 (App Router) + TypeScript
project. The design is the original Framer design: Framer's rendered markup and CSS are kept
verbatim and turned into typed React components, so every page looks and animates exactly as
before while the codebase has a conventional structure.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run check        # typecheck + lint + prettier
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` for production (used for
canonical URLs, Open Graph, sitemap and robots).

## Project structure

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the full picture. In short:

| Path                       | What it is                                                                 |
| -------------------------- | -------------------------------------------------------------------------- |
| `src/app`                  | Routes: one folder per URL segment, dynamic `[slug]` routes per collection |
| `src/components/layout`    | `PageShell`, `Header` (menu, dropdown), `Footer`, `Cta`                    |
| `src/components/sections`  | Sections shared by several pages (FAQ, achievements, card grids, …)        |
| `src/components/cards`     | Cause / event / project / resource / job / team cards                      |
| `src/components/pages`     | Sections that exist on a single page                                       |
| `src/components/runtime`   | Client behaviour: scroll-reveal animations, breakpoint hook                |
| `src/content`              | All site content as typed data                                             |
| `src/lib`                  | Types, content accessors, metadata and date helpers                        |
| `src/styles`               | Framer CSS (shared + per page template) and hand-written additions         |
| `public/images, assets, s` | Images and fonts from the Framer export                                    |

## Editing content

Everything editorial lives in `src/content/*.ts` and is typed by `src/lib/types.ts`. Add a
cause, event, project, job or resource by appending to the matching array; its detail page,
list card, sitemap entry and related-items sections follow automatically.

## Notes

- The contact form validates on the server (`src/app/contact-us/actions.ts`) but does not
  send anywhere yet; hook it to an email/CRM service there.
- Slugs that ended in `.` on the original site are served without the trailing dot.
