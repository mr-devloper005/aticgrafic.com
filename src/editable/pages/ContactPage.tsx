'use client'

import { FileText, Mail, MessageCircle, PenLine, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: FileText, title: 'Article pitches', body: 'Send essay ideas, explainers, opinion drafts, interviews, or column concepts for editorial review.' },
    { icon: MessageCircle, title: 'Corrections and feedback', body: 'Flag a typo, source issue, broken link, or reading experience problem so we can clean it up.' },
    { icon: PenLine, title: 'Contributor support', body: 'Ask about formatting, summaries, featured images, categories, or the submission workflow.' },
    { icon: Mail, title: 'Partnership notes', body: 'Reach out for newsletter collaborations, article series, sponsorship discussions, or editorial packages.' },
  ]

  return (
    <EditableSiteShell>
      <main className="mx-auto max-w-[var(--editable-container)] px-4 py-12 text-[var(--editable-page-text,#0d0d0d)] sm:px-6">
        <section className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.06em] sm:text-5xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 opacity-70">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-[1.25rem] border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-black tracking-[-0.04em]">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 opacity-70">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-[var(--editable-border)] bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Sparkles className="h-5 w-5" />
              <h2 className="text-2xl font-black tracking-[-0.05em]">{pagesContent.contact.formTitle}</h2>
            </div>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
