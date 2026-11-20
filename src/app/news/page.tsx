'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  getAllArticles,
  getFeaturedArticle,
  getNonFeaturedArticles,
  getArchiveYears,
  getAllTags,
  type NewsCategory,
  ALL_CATEGORIES,
  CATEGORY_META,
  formatDate,
  NEWS_ARTICLES,
} from '@/lib/news'
import Reveal from '@/components/ui/Reveal'

// Image map: slug → path (add as images are placed in /public/images/news/)
const ARTICLE_IMG: Record<string, string> = {
  'whbs-igot-karmayogi-elearning-modules': '/images/news/news-igot-karmayogi.jpg',
}

// Category bg colours for image placeholder fallback
const CAT_BG: Record<string, string> = {
  'Product Updates':        '#EBF2FF',
  'E-Learning Insights':    '#FFFBEB',
  'LMS / Moodle':           '#F0EAFB',
  'Case Studies':           '#E0F7FA',
  'Training & Development': '#ECFDF5',
  'Announcements':          '#FFF1F2',
  'Compliance':             '#F9FAFB',
  'Industry News':          '#F0FDFA',
}

const ITEMS_PER_PAGE = 6

// ── sub-components ──────────────────────────────────────────────────────────

function CategoryPill({ category, size = 'md' }: { category: NewsCategory; size?: 'sm' | 'md' }) {
  const m = CATEGORY_META[category]
  return (
    <span
      className={`inline-flex items-center font-bold tracking-[0.06em] uppercase rounded-[4px] ${
        size === 'sm' ? 'text-[10px] px-[8px] py-[3px]' : 'text-[11px] px-[10px] py-[4px]'
      }`}
      style={{ color: m.color, background: m.bg, border: `1px solid ${m.border}` }}
    >
      {category}
    </span>
  )
}

function ArticleMeta({ date, readTime }: { date: string; readTime: number }) {
  return (
    <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
      <time dateTime={date}>{formatDate(date)}</time>
      <span aria-hidden="true">·</span>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      <span>{readTime} min read</span>
    </div>
  )
}

// ── Featured card ────────────────────────────────────────────────────────────

function FeaturedCard({ a }: { a: ReturnType<typeof getAllArticles>[0] }) {
  const m = CATEGORY_META[a.category]
  const img = ARTICLE_IMG[a.slug]
  return (
    <Link href={`/news/${a.slug}`} className="block no-underline group" aria-label={`Read featured article: ${a.title}`}>
      <div className="grid grid-cols-1 lg:grid-cols-5 rounded-[16px] border border-gray-200 bg-white overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300">
        {/* Image panel */}
        <div
          className="lg:col-span-2 relative min-h-[220px] lg:min-h-[320px] overflow-hidden"
          style={{ background: CAT_BG[a.category] ?? '#F3F4F6' }}
        >
          {img ? (
            <Image
              src={img}
              alt={a.title}
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke={m.color} strokeWidth="1" width="72" height="72" opacity={0.18}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
          )}
          {/* grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: `linear-gradient(${m.color}10 1px,transparent 1px),linear-gradient(90deg,${m.color}10 1px,transparent 1px)`, backgroundSize: '24px 24px' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" aria-hidden="true" />
          {/* badge */}
          <div className="absolute top-4 left-4">
            <span
              className="text-[10px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full"
              style={{ color: m.color, background: 'rgba(255,255,255,0.93)', border: `1px solid ${m.border}` }}
            >
              Featured story
            </span>
          </div>
          <div className="absolute bottom-4 left-4">
            <time className="text-[11px] font-semibold text-white/80" dateTime={a.date}>{formatDate(a.date)}</time>
          </div>
        </div>

        {/* Text panel */}
        <div className="lg:col-span-3 p-7 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CategoryPill category={a.category} />
              <span className="text-[12px] text-gray-400">{a.readTime} min read</span>
            </div>
            <h2 className="text-[20px] lg:text-[24px] font-bold text-gray-900 leading-[1.3] mb-3 group-hover:text-[#0066FF] transition-colors">
              {a.title}
            </h2>
            <p className="text-[14px] text-gray-600 leading-[1.75] mb-5 line-clamp-3">{a.excerpt}</p>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {a.tags.slice(0, 4).map((t) => (
                <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-500">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-3 pt-5 border-t border-gray-100">
            <div>
              <div className="text-[13px] font-semibold text-gray-800">{a.author}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">{a.authorTitle}</div>
            </div>
            <span
              className="flex items-center gap-1.5 text-[13px] font-semibold group-hover:gap-2.5 transition-all"
              style={{ color: m.color }}
            >
              Read case study
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M1 6h10M6 1l5 5-5 5"/></svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ── Article card (grid) ───────────────────────────────────────────────────────

function ArticleCard({ a, index }: { a: ReturnType<typeof getAllArticles>[0]; index: number }) {
  const m = CATEGORY_META[a.category]
  const img = ARTICLE_IMG[a.slug]
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/news/${a.slug}`} className="block no-underline group h-full" aria-label={`Read: ${a.title}`}>
        <div className="bg-white rounded-[14px] border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
          {/* Image */}
          <div
            className="relative w-full overflow-hidden flex-shrink-0"
            style={{ height: 120, background: CAT_BG[a.category] ?? '#F3F4F6' }}
          >
            {img ? (
              <Image src={img} alt="" fill sizes="33vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-500" aria-hidden="true" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke={m.color} strokeWidth="1" width="40" height="40" opacity={0.2}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
            )}
            {/* top accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: m.color }} aria-hidden="true" />
            <div className="absolute top-3 left-3">
              <CategoryPill category={a.category} size="sm" />
            </div>
          </div>
          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <ArticleMeta date={a.date} readTime={a.readTime} />
            <h3 className="text-[14px] font-bold text-gray-900 leading-[1.45] mt-2.5 mb-2 flex-1 group-hover:text-[#0066FF] transition-colors line-clamp-3">
              {a.title}
            </h3>
            <p className="text-[12px] text-gray-500 leading-[1.6] mb-4 line-clamp-2">{a.excerpt}</p>
            <div
              className="flex items-center gap-1.5 text-[12px] font-semibold mt-auto group-hover:gap-2.5 transition-all"
              style={{ color: m.color }}
            >
              Read more
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M1 5.5h9M5.5 1l4.5 4.5-4.5 4.5"/></svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

// ── Compact list item (sidebar / more recent) ────────────────────────────────

function CompactArticleItem({ a }: { a: ReturnType<typeof getAllArticles>[0] }) {
  const m = CATEGORY_META[a.category]
  return (
    <Link href={`/news/${a.slug}`} className="block no-underline group py-4 border-b border-gray-100 last:border-0 last:pb-0">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <CategoryPill category={a.category} size="sm" />
          <h4 className="text-[13px] font-semibold text-gray-900 leading-[1.45] mt-2 mb-1.5 group-hover:text-[#0066FF] transition-colors line-clamp-2">
            {a.title}
          </h4>
          <ArticleMeta date={a.date} readTime={a.readTime} />
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={m.color} strokeWidth={2} className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M1 7h12M7 1l6 6-6 6"/></svg>
      </div>
    </Link>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | 'All'>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)

  const featured = getFeaturedArticle()
  const allArticles = getAllArticles()
  const archiveYears = getArchiveYears()
  const topTags = getAllTags().slice(0, 12)

  const filtered = useMemo(() => {
    let articles = getNonFeaturedArticles()
    if (activeCategory !== 'All') articles = articles.filter((a) => a.category === activeCategory)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      articles = articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return articles
  }, [activeCategory, searchQuery])

  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE)
  const hasMore = paginated.length < filtered.length

  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = { All: NEWS_ARTICLES.length }
    ALL_CATEGORIES.forEach((cat) => {
      map[cat] = NEWS_ARTICLES.filter((a) => a.category === cat).length
    })
    return map
  }, [])

  function handleCategoryChange(cat: NewsCategory | 'All') {
    setActiveCategory(cat)
    setPage(1)
    window.scrollTo({ top: 380, behavior: 'smooth' })
  }

  return (
    <>
      {/* ── NEWSROOM HERO ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(140deg, #060D1F 0%, #0D1425 55%, #071635 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.04) 1px,transparent 0)', backgroundSize: '100px 100px' }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{ top: '-8%', left: '-4%', width: '45%', height: '70%', background: 'radial-gradient(ellipse,rgba(0,102,255,0.14) 0%,transparent 65%)', filter: 'blur(40px)' }}
          aria-hidden="true"
        />
        <div className="container-xl relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-[12px] text-white/35 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
                <span aria-hidden="true">›</span>
                <span className="text-white/60 font-medium">Newsroom</span>
              </nav>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.05] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
                <span className="text-[11px] font-semibold text-white/55 tracking-wide uppercase">WHBS Newsroom</span>
              </div>
              <h1 className="t-h1 font-extrabold text-white mb-4">
                News, insights &amp; case studies
              </h1>
              <p className="text-lead text-white/50 max-w-[460px] mb-7">
                Expert thinking on e-learning technology, LMS implementation, Moodle development, and enterprise training solutions from the WHBS team.
              </p>
              {/* Search */}
              <div className="relative max-w-[400px]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <input
                  type="search"
                  placeholder="Search articles and case studies…"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setPage(1) }}
                  className="w-full pl-10 pr-4 py-3 rounded-[10px] text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 bg-white border border-white/10 shadow-lg"
                  aria-label="Search articles"
                />
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {[
                { n: String(allArticles.length), l: 'Articles' },
                { n: String(ALL_CATEGORIES.length), l: 'Categories' },
                { n: '14', l: 'Countries covered' },
                { n: '26+', l: 'Years operating' },
              ].map((s, i) => (
                <div key={i} className="text-center p-4 rounded-[12px] border border-white/[0.08] bg-white/[0.04]">
                  <div className="text-[22px] font-extrabold text-white leading-none mb-1">{s.n}</div>
                  <div className="text-[10px] text-white/40 font-medium uppercase tracking-wide">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER BAR ──────────────────────────────────────── */}
      <div
        className="sticky top-[64px] lg:top-[100px] z-30 bg-white/97 backdrop-blur-md border-b border-gray-200 shadow-sm overflow-x-auto"
        role="navigation"
        aria-label="Filter articles by category"
      >
        <div className="container-xl py-0">
          <div className="flex items-center gap-1 min-w-max">
            {(['All', ...ALL_CATEGORIES] as const).map((cat) => {
              const isActive = activeCategory === cat
              const m = cat === 'All' ? null : CATEGORY_META[cat]
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat as NewsCategory | 'All')}
                  className="flex items-center gap-1.5 px-4 py-3.5 text-[12px] font-semibold border-b-2 cursor-pointer transition-all duration-150 whitespace-nowrap bg-transparent"
                  style={{
                    color: isActive ? (m?.color ?? '#0066FF') : '#6B7280',
                    borderBottomColor: isActive ? (m?.color ?? '#0066FF') : 'transparent',
                  }}
                  aria-pressed={isActive}
                >
                  {cat}
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{
                      background: isActive ? `${m?.color ?? '#0066FF'}15` : '#F3F4F6',
                      color: isActive ? (m?.color ?? '#0066FF') : '#9CA3AF',
                    }}
                  >
                    {categoryCounts[cat] ?? 0}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <div className="bg-gray-50">
        <div className="container-xl py-10">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-8">

            {/* ── LEFT: articles ─────────────────────────────────────── */}
            <div>
              {/* Featured story */}
              {featured && activeCategory === 'All' && !searchQuery && (
                <Reveal className="mb-10">
                  <div className="flex items-center gap-3 mb-5">
                    <h2 className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400">Featured story</h2>
                    <div className="flex-1 h-px bg-gray-200" aria-hidden="true" />
                  </div>
                  <FeaturedCard a={featured} />
                </Reveal>
              )}

              {/* Section label + count */}
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400">
                    {activeCategory === 'All' && !searchQuery
                      ? 'Latest articles'
                      : activeCategory !== 'All'
                      ? activeCategory
                      : 'Search results'}
                  </h2>
                  <div className="flex-1 h-px bg-gray-200" aria-hidden="true" />
                  <span className="text-[11px] font-medium text-gray-400">
                    {filtered.length} article{filtered.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </Reveal>

              {/* Article grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory}-${searchQuery}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {paginated.map((a, i) => (
                    <ArticleCard key={a.slug} a={a} index={i} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Empty state */}
              {filtered.length === 0 && (
                <Reveal>
                  <div className="text-center py-16 bg-white rounded-[14px] border border-gray-100">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth={1.5} className="mx-auto mb-4" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                    <p className="text-[15px] font-semibold text-gray-700 mb-1">No articles found</p>
                    <p className="text-[13px] text-gray-500 mb-4">Try a different search term or category</p>
                    <button
                      onClick={() => { setSearchQuery(''); setActiveCategory('All'); setPage(1) }}
                      className="text-[13px] font-semibold text-[#0066FF] hover:underline bg-transparent border-none cursor-pointer"
                    >
                      Show all articles
                    </button>
                  </div>
                </Reveal>
              )}

              {/* Load more */}
              {hasMore && (
                <div className="text-center mt-8">
                  <button onClick={() => setPage((p) => p + 1)} className="btn btn-secondary">
                    Load more articles
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M6.5 1v11M1 7l5.5 5.5L12 7"/></svg>
                  </button>
                  <p className="text-[11px] text-gray-400 mt-2">
                    Showing {paginated.length} of {filtered.length} articles
                  </p>
                </div>
              )}

              {/* More recent compact list */}
              {activeCategory === 'All' && !searchQuery && getNonFeaturedArticles().length > ITEMS_PER_PAGE && (
                <Reveal className="mt-10">
                  <div className="flex items-center gap-3 mb-5">
                    <h2 className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400">More recent</h2>
                    <div className="flex-1 h-px bg-gray-200" aria-hidden="true" />
                  </div>
                  <div className="bg-white rounded-[14px] border border-gray-100 px-6">
                    {getNonFeaturedArticles()
                      .slice(ITEMS_PER_PAGE)
                      .map((a) => (
                        <CompactArticleItem key={a.slug} a={a} />
                      ))}
                  </div>
                </Reveal>
              )}

              {/* CTA strip */}
              <Reveal className="mt-10">
                <div className="rounded-[16px] p-7 lg:p-9" style={{ background: 'linear-gradient(135deg,#003DA6 0%,#0052CC 50%,#0066FF 100%)' }}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-300 mb-2">Explore our services</p>
                      <h3 className="text-[20px] font-bold text-white leading-[1.3] mb-1.5">
                        Everything you&apos;ve read is built on 26 years of delivery
                      </h3>
                      <p className="text-[13px] text-blue-200 max-w-[440px]">
                        Talk to the WHBS team about your LMS, e-learning, or ERP requirements. Our solution architects respond within 24 business hours.
                      </p>
                    </div>
                    <div className="flex gap-3 flex-wrap flex-shrink-0">
                      <Link href="/contact" className="btn btn-dark no-underline flex-shrink-0">
                        Book a consultation
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true"><path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5"/></svg>
                      </Link>
                      <Link href="/services" className="btn btn-white-outline no-underline flex-shrink-0">
                        Browse services
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── RIGHT: sidebar ─────────────────────────────────────── */}
            <aside className="flex flex-col gap-5">

              {/* Browse by category */}
              <Reveal>
                <div className="bg-white rounded-[14px] border border-gray-100 p-5">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-gray-500 mb-4 flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                    Browse by category
                  </h3>
                  {ALL_CATEGORIES.map((cat) => {
                    const m = CATEGORY_META[cat]
                    return (
                      <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className="w-full flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0 cursor-pointer bg-transparent text-left group"
                      >
                        <span className="text-[13px] text-gray-700 group-hover:text-[#0066FF] transition-colors font-medium">{cat}</span>
                        <span
                          className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                          style={{ color: m.color, background: m.bg }}
                        >
                          {categoryCounts[cat] ?? 0}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </Reveal>

              {/* Popular tags */}
              <Reveal delay={0.05}>
                <div className="bg-white rounded-[14px] border border-gray-100 p-5">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-gray-500 mb-4 flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                    Popular tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {topTags.map(({ tag }) => (
                      <button
                        key={tag}
                        onClick={() => { setSearchQuery(tag); setPage(1) }}
                        className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:border-[#CCE0FF] hover:bg-[#EBF2FF] hover:text-[#0066FF] transition-all duration-150 cursor-pointer"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Archive */}
              <Reveal delay={0.08}>
                <div className="bg-white rounded-[14px] border border-gray-100 p-5">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-gray-500 mb-4 flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>
                    Archive
                  </h3>
                  {archiveYears.map(({ year, count }) => (
                    <div key={year} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
                      <span className="text-[13px] font-medium text-gray-700">{year}</span>
                      <span className="text-[11px] text-gray-400">{count} article{count !== 1 ? 's' : ''}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Contact sidebar card */}
              <Reveal delay={0.1}>
                <div className="bg-[#EBF2FF] rounded-[14px] border border-[#CCE0FF] p-5">
                  <h3 className="text-[13px] font-bold text-[#0052CC] mb-2">Have a project in mind?</h3>
                  <p className="text-[12px] text-[#1D4ED8] leading-[1.6] mb-4 opacity-80">
                    Talk to the WHBS team about your LMS, e-learning content, or ERP requirements.
                  </p>
                  <Link href="/contact" className="btn btn-primary btn-sm no-underline w-full justify-center">
                    Get in touch
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
