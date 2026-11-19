'use client'

/**
 * NewsCard — reusable article card components.
 * Used on the article detail page for "You might also like" related articles,
 * and anywhere else in the site that surfaces news cards outside the news section.
 */

import Link from 'next/link'
import { motion } from 'framer-motion'
import { type NewsArticle, CATEGORY_META, formatDate } from '@/lib/news'
import { SCALE_IN, BUTTON_TAP } from '@/lib/motion'

// ── Shared atoms ───────────────────────────────────────────────────────────

function CategoryPill({ category }: { category: NewsArticle['category'] }) {
  const m = CATEGORY_META[category]
  return (
    <span
      className="inline-flex items-center text-[10px] font-bold tracking-[0.07em] uppercase px-[8px] py-[3px] rounded-[3px]"
      style={{ color: m.color, background: m.bg, border: `1px solid ${m.border}` }}
    >
      {category}
    </span>
  )
}

function ReadTime({ minutes }: { minutes: number }) {
  return (
    <span className="text-[11px] text-gray-400 flex items-center gap-1">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      {minutes} min read
    </span>
  )
}

// ── Standard card (grid / related) ────────────────────────────────────────

interface StandardProps { article: NewsArticle; index?: number }

export function NewsCardStandard({ article, index = 0 }: StandardProps) {
  const m = CATEGORY_META[article.category]
  return (
    <motion.article
      variants={SCALE_IN}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -4, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
      className="group flex flex-col h-full"
    >
      <Link
        href={`/news/${article.slug}`}
        className="flex flex-col h-full no-underline rounded-[14px] overflow-hidden border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-250"
        aria-label={`Read: ${article.title}`}
      >
        {/* Category colour accent */}
        <div className="h-[3px] w-full" style={{ background: m.color }} aria-hidden="true" />

        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-center justify-between gap-2 mb-4">
            <CategoryPill category={article.category} />
            <ReadTime minutes={article.readTime} />
          </div>

          <h3 className="text-[14px] font-bold leading-[1.45] tracking-tight text-gray-900 mb-2.5 flex-1 group-hover:text-[#0066FF] transition-colors line-clamp-3">
            {article.title}
          </h3>

          <p className="text-[12px] text-gray-500 leading-[1.65] mb-5 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <div>
              <p className="text-[12px] font-semibold text-gray-700">{article.author}</p>
              <time dateTime={article.date} className="text-[11px] text-gray-400 mt-0.5 block">{formatDate(article.date)}</time>
            </div>
            <span
              className="flex items-center gap-1 text-[12px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: m.color }}
            >
              Read
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M1 5.5h9M5.5 1l4.5 4.5-4.5 4.5"/></svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

// ── Featured card (large, horizontal) ─────────────────────────────────────

interface FeaturedProps { article: NewsArticle }

export function NewsCardFeatured({ article }: FeaturedProps) {
  const m = CATEGORY_META[article.category]
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link
        href={`/news/${article.slug}`}
        className="block no-underline rounded-[16px] overflow-hidden border border-gray-200 bg-white hover:shadow-xl hover:border-gray-300 transition-all duration-300"
        aria-label={`Read featured article: ${article.title}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Visual panel */}
          <div
            className="lg:col-span-2 relative min-h-[200px] lg:min-h-[280px] flex items-center justify-center overflow-hidden"
            style={{ background: m.bg, borderRight: '1px solid #E5E7EB' }}
          >
            <div
              className="text-[110px] md:text-[140px] font-extrabold leading-none tracking-tightest select-none pointer-events-none"
              style={{ color: m.color, opacity: 0.07 }}
              aria-hidden="true"
            >
              {article.category.charAt(0)}
            </div>
            <div className="absolute top-5 left-5">
              <span
                className="text-[10px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full"
                style={{ color: m.color, background: 'rgba(255,255,255,0.92)', border: `1px solid ${m.border}` }}
              >
                Featured story
              </span>
            </div>
            <div className="absolute bottom-5 left-5">
              <CategoryPill category={article.category} />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <time dateTime={article.date} className="text-[12px] text-gray-400">{formatDate(article.date)}</time>
                <span className="w-1 h-1 rounded-full bg-gray-300" aria-hidden="true" />
                <ReadTime minutes={article.readTime} />
              </div>
              <h2 className="text-[20px] md:text-[24px] font-bold leading-[1.25] tracking-[-0.02em] text-gray-900 mb-4 group-hover:text-[#0066FF] transition-colors duration-200">
                {article.title}
              </h2>
              <p className="text-[14px] text-gray-600 leading-[1.75] mb-5">{article.excerpt}</p>
              <div className="flex gap-2 flex-wrap">
                {article.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-500">{tag}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <div>
                <p className="text-[13px] font-semibold text-gray-800">{article.author}</p>
                <p className="text-[12px] text-gray-400 mt-0.5">{article.authorTitle}</p>
              </div>
              <motion.span
                className="inline-flex items-center gap-2 text-[13px] font-semibold px-4 py-2 rounded-[8px] no-underline"
                style={{ color: m.color, background: m.bg, border: `1px solid ${m.border}` }}
                whileHover={{ scale: 1.02 }}
                whileTap={BUTTON_TAP}
                transition={{ duration: 0.15 }}
              >
                Read article
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

// ── Default export (standard) ──────────────────────────────────────────────

export default NewsCardStandard
