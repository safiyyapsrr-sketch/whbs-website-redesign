# WHBS News Section — Drop-in replacement files

## Files included

| File | Replaces | What changed |
|------|----------|--------------|
| `src/lib/news.ts` | Old `news.ts` | New 8-category system, SEO fields, CTA routing, archive/tag utilities |
| `src/app/news/layout.tsx` | Old `layout.tsx` | Updated metadata description |
| `src/app/news/page.tsx` | Old `page.tsx` | Full redesign: hero, sticky filter bar, featured card, grid, sidebar, CTA |
| `src/app/news/[slug]/page.tsx` | Old `[slug]/page.tsx` | Light theme, breadcrumb, share buttons, contextual CTA, related articles |
| `src/components/ui/NewsCard.tsx` | Old `NewsCard.tsx` | Updated for new category types |

## How to install

1. Copy all files from this folder into your project, overwriting the originals.
2. Run `npm run dev` — no new dependencies required.
3. Build confirms with `npm run build`.

## New category system

Old: Company News | Product Update | Case Study | Industry Insight | Press Release | Government
New: Product Updates | E-Learning Insights | LMS / Moodle | Case Studies | Training & Development | Announcements | Compliance | Industry News

## URL structure

- /news/                      → index (news/page.tsx)
- /news/[slug]/               → article (news/[slug]/page.tsx)

Category and tag filtering is done in-page (client-side) — no separate route pages needed.
To add server-side category routes later: create /news/category/[cat]/page.tsx and pass
`getArticlesByCategory()` from lib/news.ts.

## Adding new articles

Open `src/lib/news.ts` and append to the `NEWS_ARTICLES` array. Required fields:
slug, title, excerpt, category (must match NewsCategory type), date (ISO 8601),
readTime, featured (only one article should be true), tags, author, authorTitle,
seoTitle (≤60 chars), seoDescription (≤155 chars), ctaHref, ctaLabel, body[].

## Adding article images

Place images in `/public/images/news/` and add to the `ARTICLE_IMG` map in
`src/app/news/page.tsx`. The map key is the article slug.
