'use client'

import Image from 'next/image'
import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

const FAQS = [
  { q: 'What is the average timeline for a custom Moodle LMS theme deployment?', a: 'A standard customised corporate Moodle theme takes approximately 4–8 weeks from discovery to deployment, depending on complexity and integrations.' },
  { q: 'Do you offer on-premise installation for Smartbooks ERP?', a: 'Yes. Smartbooks V7.0 ERP is available as fully on-premise deployment behind your corporate firewall, or as a cloud-hosted SaaS instance.' },
  { q: 'How do you structure post-launch maintenance SLA contracts?', a: 'We provide annual SLA packages covering security updates, plugin upgrades, server tuning, and content modifications with defined response times.' },
  { q: 'Are your eLearning modules SCORM or xAPI compliant?', a: 'All courseware developed by WHBS is fully compliant with SCORM 1.2, SCORM 2004, and xAPI standards, compatible with any modern LMS.' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.')
      return
    }

    setError('')
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <>
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/sections/contact-whbs-bg.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(2,6,23,0.92) 0%,rgba(15,23,42,0.88) 40%,rgba(30,58,138,0.85) 100%)' }} aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }} aria-hidden="true" />
        </div>
        <div className="container-xl relative z-10">
          <div className="max-w-[720px] mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 mb-6">
              Contact WHBS
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
              Discuss your next learning or enterprise technology programme
            </h1>
            <p className="text-[17px] text-blue-100/80 leading-[1.7] max-w-[620px]">
              Share your requirements, timeline, and platform goals and we will connect you with the right WHBS team.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <div className="rounded-[20px] border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
                <h2 className="text-[22px] font-semibold text-white mb-4">Get in touch</h2>
                <div className="space-y-4 text-[14px] text-blue-100/80">
                  <div>
                    <div className="font-semibold text-white mb-1">Registered office</div>
                    <div>No.7, Pulla Avenue, Shenoy Nagar, Chennai — 600030, Tamil Nadu, India</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Phone</div>
                    <div>+91-44-2561 9113 · +91 70100 37016</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <div>info@whitehouseit.com</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Hours</div>
                    <div>Mon–Fri, 9:00 AM – 6:00 PM IST</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <Reveal>
              <div className="rounded-[20px] border border-gray-200 bg-white p-8 shadow-sm">
                {submitted ? (
                  <div className="rounded-[16px] border border-green-200 bg-green-50 p-6 text-center">
                    <h3 className="text-[20px] font-extrabold text-gray-900 mb-2">Thanks for reaching out</h3>
                    <p className="text-[14px] text-gray-600">We will review your message and respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {error && <div className="rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">{error}</div>}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-gray-700">Name *</label>
                        <input type="text" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} className="w-full rounded-[10px] border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-gray-900 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-gray-700">Company</label>
                        <input type="text" value={formData.company} onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))} className="w-full rounded-[10px] border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-gray-900 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your organisation" />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-gray-700">Email *</label>
                        <input type="email" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} className="w-full rounded-[10px] border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-gray-900 outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-gray-700">Subject</label>
                        <input type="text" value={formData.subject} onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))} className="w-full rounded-[10px] border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-gray-900 outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help?" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[13px] font-semibold text-gray-700">Message *</label>
                      <textarea rows={5} value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} className="w-full resize-none rounded-[10px] border border-gray-200 bg-white px-3.5 py-2.5 text-[14px] text-gray-900 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe your requirements or project..." />
                    </div>
                    <button type="submit" disabled={submitting} className="btn btn-primary btn-lg w-full disabled:cursor-not-allowed disabled:opacity-60">
                      {submitting ? 'Sending…' : 'Send Message →'}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="container-xl">
          <Reveal>
            <h2 className="text-[26px] font-extrabold tracking-tight text-gray-900 mb-7">Frequently asked questions</h2>
            <div className="flex flex-col gap-3">
              {FAQS.map((faq, fi) => (
                <div key={`faq-${fi}`} className="overflow-hidden rounded-[14px] border border-gray-200 bg-white">
                  <button onClick={() => setOpenFaq(openFaq === fi ? null : fi)} className="flex w-full items-center justify-between bg-transparent px-5 py-4 text-left">
                    <span className="pr-4 text-[14px] font-semibold text-gray-900">{faq.q}</span>
                    <span className="flex-shrink-0 text-[18px] font-light text-gray-400">{openFaq === fi ? '−' : '+'}</span>
                  </button>
                  {openFaq === fi && <div className="border-t border-gray-200 px-5 pb-4 pt-3 text-[14px] leading-[1.75] text-gray-600">{faq.a}</div>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
