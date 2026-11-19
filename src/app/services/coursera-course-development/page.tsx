import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import InnerCTA from '@/components/ui/InnerCTA'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Coursera Course Development — WHBS',
  description: 'WHBS has developed 16 Coursera courses for the World Bank Group in English, Spanish and French. Consultation, course development, training, and ongoing support for institutions launching on Coursera.',
}

const TRAINING_PHASES = [
  { num: 'I',  title: 'Coursera Awareness', body: 'To give awareness about how Coursera works and why you are there.' },
  { num: 'II', title: 'Material Preparation', body: 'To prepare you for the Coursera course material development.' },
  { num: 'III',title: 'Feature Education', body: 'To educate you about the Coursera features.' },
  { num: 'IV', title: 'Learner Interaction', body: 'To train you in learner interactions during course running.' },
]

const SERVICE_SECTIONS = [
  {
    id: 'universities',
    title: 'Support Consultation to Universities and Colleges on Coursera',
    paragraphs: [
      'Many top universitites has been partnering with Coursera. (Refer https://www.coursera.org). With every passing day, as the education field is become competitive and embracing innovative methods for the benefit of the learners, we provide consultation to the universities and colleges who are willing to develop courses in Coursera platform. As we know the intricacies well and has been experienced in communication with the Coursera support team, we guide to provide best online courses for your institution. If your institution has high ambitions to play a role from regional institution to a global institution please contact us immediately and become a first ever institution to launch courses in Coursera from your region.',
    ],
  },
  {
    id: 'academics',
    title: 'Consultation to Academics, Professors and other Educationalists on Coursera',
    paragraphs: [
      'If you are an educationist/academic person trying to establish yourself with an identity and brand value, we guide you to develop courses in coursera. Depends on your approach, you can also collaborate with like-minded people to form a group to jointly develop coursera courses. We provide you orientation about how the coursera courses works and its reach in due process to help you for a successful launch in the world of MOOCs. If you search for an opportunity to go global with your special expertise in any specific domain, do contact us without any second thought and we will provide you a road map for your international success.',
    ],
  },
  {
    id: 'course-development',
    title: 'Course development in Coursera',
    paragraphs: [
      'We have an abundant experience in Coursera course development as we had developed about 16 courses for the World Bank Group in 3 languages English, Spanish and French. Hence as you know, experience comes handy for cost-effective and speeder completion of course development, when you spot us for the course development in Coursera. Also knowing the limitations, advantages, features and other development related points, we channelize you from the beginning of the course development. When you show interest to pick us for your course development, we give a simple orientation on how to design a course with a successful pedagogy and it will make you to prepare the course materials towards the defined objectives, without wasting your knowledge and resources. We are capable to develop Coursera courses in multi-languages and no matter if you have your course material in one language, we do translate into your required language and develop it.',
    ],
  },
]

export default function CourseraCourseDevelopmentPage() {
  return (
    <>
      {/* ANIMATED HERO */}
      <section className="relative overflow-hidden px-6 pb-[120px]">
        <div className="absolute inset-0 z-0"><Image src="/images/services/coursera/coursera-hero.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" /><div className="absolute inset-0" style={{ background: 'rgba(2,10,40,0.88)' }} aria-hidden="true" /></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(96,165,250,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.5) 1px,transparent 1px)', backgroundSize: '110px 110px' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {[0,1,2,3,4,5].map(i => (
            <div key={`nh-${i}`} className="absolute rounded-full animate-pulse"
              style={{ top: `${[20,50,75,18,60,82][i]}%`, left: i < 3 ? `${[6,4,12][i]}%` : undefined, right: i >= 3 ? `${[7,5,12][i-3]}%` : undefined,
                width: [7,5,9,8,6,7][i], height: [7,5,9,8,6,7][i], background: '#60A5FA',
                animationDelay: `${i * 0.8}s`, animationDuration: '3s', opacity: 0.7 }} />
          ))}
          <div className="absolute top-0 -right-24 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle,#0066FF,transparent)' }} aria-hidden="true" />
        </div>
        <div className="container-xl relative z-10">
          <nav className="flex items-center gap-2 text-[12px] text-white/50 mb-7 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors no-underline">Services</Link>
            <span>›</span>
            <span className="font-semibold" style={{ color: '#60A5FA' }}>Coursera Course Development</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 mb-6" style={{ color: '#60A5FA' }}>
            Coursera Course Development
          </span>
          <h1 className="font-extrabold text-white tracking-[-0.04em] leading-[1.12] mb-5 max-w-[760px]" style={{ fontSize: 'clamp(30px,4vw,52px)' }}>
            Coursera Course Development
          </h1>
          <p className="text-[17px] text-white/70 max-w-[580px] leading-[1.7]">
            From 2014, WHBS has been the vendor to develop online courses for the World Bank Group — 16 courses delivered across English, Spanish, and French.
          </p>
        </div>
      </section>

      {/* TWO-COLUMN INTRO — What is MOOC / About Coursera */}
      <section className="py-10 px-6 bg-white">
        <div className="container-xl max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_1fr] gap-8 items-center">
            {/* Left: image — reduced ~30% */}
            <Reveal>
              <div className="relative w-full mx-auto rounded-[14px] overflow-hidden shadow-md" style={{ aspectRatio: '4/3', maxWidth: 340 }}>
                <Image
                  src="/images/services/coursera/content.jpg"
                  alt="Coursera course development"
                  fill
                  sizes="(max-width:1024px) 60vw, 340px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* Right: typography, not cards */}
            <Reveal delay={0.08}>
              <div className="max-w-[600px]">
                <h2 className="text-[21px] font-extrabold text-gray-900 tracking-tight mb-2">What is MOOC?</h2>
                <p className="text-[15px] text-gray-600 leading-[1.7] mb-5">
                  A Massive Open Online Course (MOOC) is a free web-based distance learning program that is designed for the participation of large numbers of geographically dispersed students.
                </p>

                <h2 className="text-[21px] font-extrabold text-gray-900 tracking-tight mb-2">About Coursera</h2>
                <p className="text-[15px] text-gray-600 leading-[1.7] mb-2">
                  Coursera is one of the MOOC platform to develop online courses. Every course on Coursera is taught by top instructors from the world&rsquo;s best universities and educational institutions. Courses include recorded video lectures, auto-graded and peer-reviewed assignments, and community discussion forums. When you complete a course, you&rsquo;ll receive a shareable electronic Course Certificate.
                </p>
                <a
                  href="https://about.coursera.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold no-underline"
                  style={{ color: '#0066FF' }}
                >
                  about.coursera.org
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M3 9L9 3M9 3H4M9 3v5" /></svg>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WHBS CAN OFFER — intro line */}
      <section className="py-8 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">What WHBS can offer you in Coursera courses?</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7] mb-2">
              From 2014, we have been the vendor to develop online courses for the World Bank Group. We have successfully developed 16 online courses totally so far in various topics and in 3 different languages including English, Spanish and French.
            </p>
            <p className="text-[15px] text-gray-600 leading-[1.7]">
              With the experience and pioneer in developing courses for Coursera, WHBS offers the following services:
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE SECTIONS — each heading is its own section */}
      {SERVICE_SECTIONS.map((sec, i) => (
        <section key={sec.id} className={`py-8 px-6 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container-xl max-w-[1200px]">
            <Reveal>
              <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={pi} className="text-[15px] text-gray-600 leading-[1.7] mb-2 last:mb-0">{p}</p>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      {/* TRAINING TO FACILITATE — with compact Phase tiles */}
      <section className="py-8 px-6 bg-white border-t border-gray-200">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">Training to facilitate Coursera courses before, during and after course launch</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7] mb-3">
              Creating awareness about a product and realising the potential of its features is important before any successful product launch. We train you in a methodological way from the moment you embrace our services for the course development in Coursera. We provide face-to-face training, Online training or whichever the means you are convenient irrespective of your global presence. Our training consists of four phases:
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
            {TRAINING_PHASES.map((ph, i) => (
              <Reveal key={ph.num} delay={i * 0.04}>
                <div className="h-full rounded-[10px] px-4 py-3 bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-250">
                  <div
                    className="w-7 h-7 rounded-[7px] flex items-center justify-center mb-2 text-[12px] font-extrabold"
                    style={{ background: 'rgba(96,165,250,0.12)', color: '#2563EB' }}
                  >
                    {ph.num}
                  </div>
                  <h3 className="text-[13px] font-bold text-gray-900 mb-1 leading-tight">Phase {ph.num}: {ph.title}</h3>
                  <p className="text-[12px] text-gray-600 leading-[1.55]">{ph.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-[13px] text-gray-500 leading-[1.6] italic">We also provide a brief presentations of all the phases along with our training.</p>
          </Reveal>
        </div>
      </section>

      {/* COURSERA SUPPORT DURING COURSE RUNNING */}
      <section className="py-8 px-6 bg-gray-50 border-t border-gray-200">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">Coursera support during course running</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7]">
              Support is the key success in our services be it eLearning development or open source customization. During course running period, we will be in standby with you to support you on how to prepare for the consecutive weeks and will guide you to handle the learner questions, technical/content glitches if any 24 x 7, for the full course running period, say 4 weeks or 5 weeks. We also capable of providing support to more than 5 courses at a time during course launch. It will be like a feel in home when you are with us, as we are not novice in Coursera course development and support. So board WHBS cruiseliner and start your travel in Coursera ocean.
            </p>
          </Reveal>
        </div>
      </section>

      <InnerCTA heading="Talk to us about Coursera course development" body="Reach out to discuss your Coursera course requirements with the WHBS team." primaryLabel="Contact Us" primaryHref="/contact" secondaryLabel="All Services" secondaryHref="/services" accentColor="#60A5FA" />
    </>
  )
}
