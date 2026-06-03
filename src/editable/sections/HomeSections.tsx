import Link from 'next/link'
import { ArrowRight, Bookmark, Clock3, Eye, Search, Sparkle } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function readTime(post: SitePost, fallback = '3 min read') {
  const words = getEditableExcerpt(post, 1200).split(/\s+/).filter(Boolean).length
  return words ? `${Math.max(1, Math.ceil(words / 220))} min read` : fallback
}

function SectionHeader({ title, kicker, href }: { title: string; kicker: string; href: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-[1.25rem] border border-[var(--editable-border)] bg-white px-5 py-4">
      <div className="flex min-w-0 items-center gap-3">
        <Sparkle className="h-5 w-5 shrink-0 fill-current" />
        <h2 className="text-2xl font-black tracking-[-0.05em]">{title}</h2>
        <p className="hidden text-xs font-bold opacity-55 sm:block">{kicker}</p>
      </div>
      <Link href={href} className="inline-flex shrink-0 items-center gap-2 text-sm font-bold">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-black text-white"><ArrowRight className="h-4 w-4" /></span>
        <span className="hidden sm:inline">View more</span>
      </Link>
    </div>
  )
}

function SmallStory({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group grid gap-3 rounded-[1.25rem] border border-[var(--editable-border)] bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-lg sm:grid-cols-[92px_1fr]">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 self-center">
        <h3 className="line-clamp-2 text-sm font-black leading-tight tracking-[-0.03em]">{post.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-[11px] font-bold opacity-55"><Clock3 className="h-3 w-3" /> {readTime(post)}</p>
      </div>
    </Link>
  )
}

function PosterCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group block min-w-0">
      <article className="relative overflow-hidden rounded-[1.35rem]">
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-[10px] font-black">{getEditableCategory(post)}</span>
          <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white transition group-hover:bg-black group-hover:text-white"><ArrowRight className="h-4 w-4" /></span>
        </div>
        <h3 className="mt-3 line-clamp-2 text-lg font-black leading-tight tracking-[-0.04em]">{post.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-[11px] font-bold opacity-55">Story {String(index + 1).padStart(2, '0')} <span>/</span> {readTime(post)}</p>
      </article>
    </Link>
  )
}

function EditorialCard({ post, href, featured = false }: { post: SitePost; href: string; featured?: boolean }) {
  return (
    <Link href={href} className={`group block overflow-hidden rounded-[1.35rem] border border-[var(--editable-border)] bg-white transition hover:-translate-y-0.5 hover:shadow-xl ${featured ? 'md:col-span-2' : ''}`}>
      <div className={`relative overflow-hidden bg-[var(--slot4-media-bg)] ${featured ? 'aspect-[16/8]' : 'aspect-[4/3]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-black">{getEditableCategory(post)}</span>
        <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white"><Bookmark className="h-4 w-4" /></span>
      </div>
      <div className="p-5">
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{readTime(post)}</p>
        <h3 className={`mt-3 line-clamp-3 font-black leading-tight tracking-[-0.05em] ${featured ? 'text-3xl' : 'text-xl'}`}>{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 opacity-65">{getEditableExcerpt(post, featured ? 170 : 115)}</p>
      </div>
    </Link>
  )
}

function ListRow({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid gap-4 rounded-[1.25rem] border border-[var(--editable-border)] bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-lg sm:grid-cols-[150px_1fr]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="min-w-0 self-center">
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Pick {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-2 line-clamp-2 text-xl font-black leading-tight tracking-[-0.04em]">{post.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 opacity-65">{getEditableExcerpt(post, 110)}</p>
        <p className="mt-3 flex items-center gap-4 text-[11px] font-bold opacity-55"><span className="inline-flex items-center gap-1"><Eye className="h-3.5 w-3.5" /> Read</span><span>{readTime(post)}</span></p>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const hero = posts[0]
  const side = posts.slice(1, 4)
  if (!hero) return null
  return (
    <section className={`${pal.pageBg} px-4 py-9 sm:px-6`}>
      <div className="mx-auto max-w-[var(--editable-container)]">
        <div className="grid gap-5 lg:grid-cols-[1fr_330px]">
          <Link href={postHref(primaryTask, hero, primaryRoute)} className="group relative min-h-[430px] overflow-hidden rounded-[1.6rem] bg-black text-white">
            <img src={getEditablePostImage(hero)} alt={hero.title} className="absolute inset-0 h-full w-full object-cover opacity-72 transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.12)),linear-gradient(180deg,transparent,rgba(0,0,0,0.55))]" />
            <div className="relative z-10 flex min-h-[430px] max-w-2xl flex-col justify-end p-6 sm:p-10">
              <span className="w-fit rounded-full bg-white px-3 py-1 text-[10px] font-black text-black">{getEditableCategory(hero)}</span>
              <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.06em] sm:text-5xl">{hero.title || pagesContent.home.hero.title.join(' ')}</h1>
              <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/80 sm:text-base">{getEditableExcerpt(hero, 180) || pagesContent.home.hero.description}</p>
              <div className="mt-6 flex items-center gap-4 text-xs font-bold text-white/80">
                <span>{taskLabel(primaryTask)}</span>
                <span>{readTime(hero)}</span>
                <span className="inline-flex items-center gap-1"><Eye className="h-4 w-4" /> Open story</span>
              </div>
            </div>
          </Link>
          <div className="grid gap-4">
            <div className="rounded-[1.35rem] border border-[var(--editable-border)] bg-white p-5">
              <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{pagesContent.home.hero.badge}</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.05em]">{pagesContent.home.hero.title.join(' ')}</h2>
              <form action="/search" className="mt-5 flex rounded-full border border-[var(--editable-border)] bg-[var(--slot4-gray)] p-1.5">
                <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-4 text-sm font-bold outline-none" />
                <button className="grid h-10 w-10 place-items-center rounded-full bg-black text-white" aria-label="Search"><Search className="h-4 w-4" /></button>
              </form>
            </div>
            {side.map((post) => <SmallStory key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 6)
  if (!railPosts.length) return null
  return (
    <section className={`${pal.pageBg} px-4 pb-12 sm:px-6`}>
      <div className="mx-auto max-w-[var(--editable-container)]">
        <SectionHeader title="Top Trending" kicker="Today's most-read articles" href={primaryRoute} />
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {railPosts.map((post, index) => <PosterCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(3, 10)
  if (!featured.length) return null
  return (
    <section className={`${pal.grayBg} px-4 py-12 sm:px-6`}>
      <div className="mx-auto max-w-[var(--editable-container)]">
        <SectionHeader title="Staff Picks" kicker="Handpicked by the editorial team" href={primaryRoute} />
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 6).map((post, index) => (
            <EditorialCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const latest = (collected.length ? collected : posts).slice(0, 8)
  if (!latest.length) return null
  return (
    <section className={`${pal.pageBg} px-4 py-12 sm:px-6`}>
      <div className="mx-auto max-w-[var(--editable-container)]">
        <SectionHeader title="Latest News" kicker="Fresh articles and quick updates" href={primaryRoute} />
        <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-5">
            {latest.slice(0, 5).map((post, index) => <ListRow key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
          <aside className="space-y-5">
            <div className="rounded-[1.35rem] border border-[var(--editable-border)] bg-white p-6">
              <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Newsletter</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.05em]">Get the week's best articles.</h2>
              <p className="mt-3 text-sm leading-6 opacity-65">A short editorial digest with new essays, analysis, and useful reads.</p>
              <form action="/search" className="mt-5 flex rounded-full border border-[var(--editable-border)] bg-[var(--slot4-gray)] p-1.5">
                <input name="q" placeholder="Explore topics" className="min-w-0 flex-1 bg-transparent px-4 text-sm font-bold outline-none" />
                <button className="rounded-full bg-black px-4 text-sm font-black text-white">Go</button>
              </form>
            </div>
            {latest.slice(5, 8).map((post) => <SmallStory key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </aside>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-[var(--editable-container)] rounded-[1.6rem] border border-[var(--editable-border)] bg-[var(--slot4-gray)] p-8 text-center sm:p-12">
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{pagesContent.home.cta.badge}</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-[-0.05em] sm:text-4xl">{pagesContent.home.cta.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 opacity-65">{pagesContent.home.cta.description}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href={pagesContent.home.cta.primaryCta.href} className={dc.button.primary}>{pagesContent.home.cta.primaryCta.label}</Link>
          <Link href={pagesContent.home.cta.secondaryCta.href} className={dc.button.secondary}>{pagesContent.home.cta.secondaryCta.label}</Link>
        </div>
      </div>
    </section>
  )
}
