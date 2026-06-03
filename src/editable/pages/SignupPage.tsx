import type { Metadata } from 'next'
import Link from 'next/link'
import { Image, PenLine, Send } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-text,#0d0d0d)] text-white">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[420px_1fr]">
          <div className="rounded-[1.6rem] border border-white/10 bg-white p-6 text-[#0d0d0d] shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
            <h1 className="text-3xl font-black tracking-[-0.05em]">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm opacity-70">Already have an account? <Link href="/login" className="font-black underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/60">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.06em] sm:text-5xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                [PenLine, 'Shape a draft'],
                [Image, 'Add a feature image'],
                [Send, 'Submit cleanly'],
              ].map(([Icon, label]) => (
                <div key={label as string} className="rounded-[1.25rem] border border-white/10 bg-white/[0.08] p-4 text-sm font-black">
                  <Icon className="h-5 w-5" />
                  <span className="mt-3 block">{label as string}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
