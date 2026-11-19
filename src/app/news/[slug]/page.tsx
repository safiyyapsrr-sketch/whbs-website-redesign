import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getArticleBySlug,
  getAllSlugs,
  getRelatedArticles,
  formatDate,
  CATEGORY_META,
  type ArticleBlock,
  type NewsArticle,
} from '@/lib/news'
import Reveal from '@/components/ui/Reveal'

// ── STATIC PARAMS ─────────────────────────────────────────────────────────
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

// ── SEO METADATA ──────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Article Not Found — WHBS' }
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
    alternates: { canonical: `https://www.whitehouseit.com/news/${slug}` },
  }
}

// ── BODY RENDERER ─────────────────────────────────────────────────────────

function renderBlock(block: ArticleBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className="text-[16px] text-gray-700 leading-[1.85] mb-6">
          {block.text}
        </p>
      )

    case 'heading':
      if (block.level === 2)
        return (
          <h2 key={index} className="text-[22px] font-bold tracking-[-0.02em] text-gray-900 leading-[1.3] mt-12 mb-5">
            {block.text}
          </h2>
        )
      return (
        <h3 key={index} className="text-[18px] font-bold tracking-tight text-gray-800 leading-[1.35] mt-9 mb-4">
          {block.text}
        </h3>
      )

    case 'list':
      if (block.style === 'numbered')
        return (
          <ol key={index} className="list-none space-y-3 mb-7 pl-0">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center mt-0.5"
                  style={{ background: '#EBF2FF', color: '#0066FF', border: '1px solid #CCE0FF' }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="text-[15px] text-gray-700 leading-[1.75]">{item}</span>
              </li>
            ))}
          </ol>
        )
      return (
        <ul key={index} className="list-none space-y-3 mb-7 pl-0">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-[9px]" aria-hidden="true" />
              <span className="text-[15px] text-gray-700 leading-[1.75]">{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'quote':
      return (
        <blockquote key={index} className="relative my-9 pl-6 py-1" style={{ borderLeft: '3px solid #0066FF' }}>
          <p className="text-[17px] text-gray-800 leading-[1.8] italic mb-3 font-medium">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <cite className="text-[13px] text-gray-500 not-italic font-medium">
              — {block.attribution}
            </cite>
          )}
        </blockquote>
      )

    case 'callout':
      return (
        <div
          key={index}
          className="my-8 px-5 py-4 rounded-[12px] flex gap-3 items-start"
          style={{ background: '#EBF2FF', border: '1px solid #CCE0FF' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth={2} className="flex-shrink-0 mt-0.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          <p className="text-[14px] text-[#0052CC] leading-[1.7]">{block.text}</p>
        </div>
      )

    default:
      return null
  }
}

// ── BREADCRUMB ────────────────────────────────────────────────────────────

function Breadcrumb({ article }: { article: NewsArticle }) {
  const m = CATEGORY_META[article.category]
  return (
    <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-8 flex-wrap" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-gray-700 transition-colors no-underline">Home</Link>
      <span aria-hidden="true">›</span>
      <Link href="/news" className="hover:text-gray-700 transition-colors no-underline">Newsroom</Link>
      <span aria-hidden="true">›</span>
      <Link
        href={`/news?category=${encodeURIComponent(article.category)}`}
        className="hover:text-gray-700 transition-colors no-underline font-medium"
        style={{ color: m.color }}
      >
        {article.category}
      </Link>
    </nav>
  )
}

// ── PAGE ──────────────────────────────────────────────────────────────────

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getRelatedArticles(slug, 3)
  const m = CATEGORY_META[article.category]

  return (
    <>
      {/* ── ARTICLE HEADER ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200 pt-10 pb-12 px-6">
        {/* Top accent line in category colour */}
        <div className="h-[3px] w-full fixed top-[64px] lg:top-[100px] left-0 right-0 z-20" style={{ background: m.color }} aria-hidden="true" />

        <div className="max-w-[780px] mx-auto">
          <Breadcrumb article={article} />

          {/* Category + read time */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-flex items-center text-[11px] font-bold tracking-[0.07em] uppercase px-3 py-1.5 rounded-[4px]"
              style={{ color: m.color, background: m.bg, border: `1px solid ${m.border}` }}
            >
              {article.category}
            </span>
            <span className="text-[12px] text-gray-400">{article.readTime} min read</span>
          </div>

          {/* Headline */}
          <h1 className="text-[28px] md:text-[38px] font-bold tracking-[-0.025em] leading-[1.2] text-gray-900 mb-5">
            {article.title}
          </h1>

          {/* Deck */}
          <p className="text-[18px] text-gray-500 leading-[1.72] mb-8 max-w-[680px]">
            {article.excerpt}
          </p>

          {/* Author row */}
          <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0"
                style={{ background: m.color }}
                aria-hidden="true"
              >
                {article.author.charAt(0)}
              </div>
              <div>
                <div className="text-[13px] font-semibold text-gray-900">{article.author}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{article.authorTitle}</div>
              </div>
            </div>

            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" aria-hidden="true" />

            <time dateTime={article.date} className="text-[13px] text-gray-400 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              {formatDate(article.date)}
            </time>

            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" aria-hidden="true" />

            <span className="text-[13px] text-gray-400 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              {article.readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-12">
        <div className="max-w-[780px] mx-auto">

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10 pb-10 border-b border-gray-100">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/news?search=${encodeURIComponent(tag)}`}
                className="text-[11px] font-medium px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:border-[#CCE0FF] hover:bg-[#EBF2FF] hover:text-[#0066FF] transition-all no-underline"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Body blocks */}
          <article>
            {article.body.map((block, i) => renderBlock(block, i))}
          </article>

          {/* Share + back row */}
          <div className="mt-14 pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-gray-600 no-underline hover:text-[#0066FF] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M13 7H1M7 1L1 7l6 6"/></svg>
              Back to Newsroom
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-[12px] text-gray-400 font-medium">Share:</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.whitehouseit.com/news/${article.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 hover:text-[#0066FF] no-underline transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(article.title)}&body=https://www.whitehouseit.com/news/${article.slug}`}
                className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 hover:text-[#0066FF] no-underline transition-colors"
                aria-label="Share via email"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE-END CTA ───────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-200 px-6 py-12">
        <div className="max-w-[780px] mx-auto">
          <div
            className="rounded-[16px] p-7 md:p-9"
            style={{ background: m.bg, border: `1px solid ${m.border}` }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: m.color }}>
                  Next step
                </p>
                <h2 className="text-[18px] font-bold text-gray-900 leading-[1.3] mb-1.5">
                  Interested in this area of expertise?
                </h2>
                <p className="text-[14px] text-gray-600">
                  The WHBS team has delivered projects like this across 14 countries. Let's discuss your requirements.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap flex-shrink-0">
                <Link
                  href={article.ctaHref}
                  className="btn btn-primary no-underline flex-shrink-0"
                  style={{ background: m.color }}
                >
                  {article.ctaLabel}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
                </Link>
                <Link href="/contact" className="btn btn-secondary no-underline">
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED ARTICLES ──────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-white border-t border-gray-100 px-6 py-14">
          <div className="max-w-[780px] mx-auto">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-[18px] font-bold text-gray-900">You might also like</h2>
                <div className="h-px flex-1 max-w-[80px] bg-gray-200" aria-hidden="true" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {related.map((rel) => {
                const rm = CATEGORY_META[rel.category]
                return (
                  <Reveal key={rel.slug}>
                    <Link href={`/news/${rel.slug}`} className="block no-underline group">
                      <div className="bg-white rounded-[12px] border border-gray-100 hover:border-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-250 overflow-hidden h-full flex flex-col">
                        <div className="h-1 w-full" style={{ background: rm.color }} aria-hidden="true" />
                        <div className="p-5 flex flex-col flex-1">
                          <span
                            className="text-[10px] font-bold tracking-[0.07em] uppercase px-2 py-1 rounded-[3px] self-start mb-3"
                            style={{ color: rm.color, background: rm.bg }}
                          >
                            {rel.category}
                          </span>
                          <h3 className="text-[13px] font-semibold text-gray-900 leading-[1.45] mb-2 flex-1 group-hover:text-[#0066FF] transition-colors line-clamp-3">
                            {rel.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[11px] text-gray-400 mt-auto">
                            <time dateTime={rel.date}>{formatDate(rel.date)}</time>
                            <span>·</span>
                            <span>{rel.readTime} min</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                )
              })}
            </div>

            <Reveal className="mt-8 text-center">
              <Link href="/news" className="btn btn-secondary no-underline">
                View all articles in the newsroom
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
              </Link>
            </Reveal>
          </div>
        </section>
      )}
    </>
  )
}
