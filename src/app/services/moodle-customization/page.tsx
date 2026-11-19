import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import InnerCTA from '@/components/ui/InnerCTA'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Moodle Customization — WHBS',
  description: 'WHBS Moodle customization services since 1998 — plugin development, theme customization, e-commerce, SMS/email integration, mobile apps, hosting, LDAP/SSO, and MOOC platform setup.',
}

const PHILOSOPHY = ['Constructivism', 'Social constructivism', 'Connected and separate']

const PEDAGOGY_POINTS = [
  'Moodle tries to support a Social Constructionist view',
  'All of us are potential teachers as well as learners – in a true collaborative environment we are both',
  'We learn particularly well from the act of creating or expressing something for others to see.',
  'We learn a lot by just observing the activity of our peers.',
  'By understanding the contexts of others, we can teach in a more transformational way (constructivism)',
  'A learning environment needs to be flexible and adaptable, so that it can quickly respond to the needs of the participants within it.',
]

const STANDARDS = ['GNU General Public License', 'IMS LTI™ Certified', 'SCORM-ADL compliant', 'Open Badges']

const WHY_MOODLE = [
  'Supports more than 200 languages',
  'Tracks training program effectively',
  'With amazing reports',
  'Highly flexible in terms of scalability',
  'Hundred of plug-ins available to perform wide range of functions',
  'Easy integration with other enterprise systems',
  'An open source and anyone can tweak to fit their institution learning needs',
  'Large community support',
]

const CUSTOMIZATION_SERVICES = [
  'Plugin creation/customisation',
  'Theme customisation',
  'e-commerce solution along with payment gateway integration',
  'SMS (short messaging services) integration / Email api integration',
  'Moodle mobile app services',
  'Moodle consulting',
  'Moodle hosting',
  'Moodle course development',
  'Moodle LDAP/SSO services',
  'Moodle as MOOC platform and more …..',
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0">
      <circle cx="8" cy="8" r="8" fill="#0066FF" opacity="0.12" />
      <path d="M4.5 8l2.2 2.2L11.5 5.5" stroke="#0066FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function MoodleCustomizationPage() {
  return (
    <>
      {/* ANIMATED HERO */}
      <section className="relative overflow-hidden px-6 pb-[120px]">
        <div className="absolute inset-0 z-0"><Image src="/images/services/moodle/moodle-hero.jpg" alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" /><div className="absolute inset-0" style={{ background: 'rgba(2,8,36,0.88)' }} aria-hidden="true" /></div>
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
            <span className="font-semibold" style={{ color: '#60A5FA' }}>Moodle Customization</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 mb-6" style={{ color: '#60A5FA' }}>
            Moodle Customization
          </span>
          <h1 className="font-extrabold text-white tracking-[-0.04em] leading-[1.12] mb-5 max-w-[760px]" style={{ fontSize: 'clamp(30px,4vw,52px)' }}>
            Moodle Customization
          </h1>
          <p className="text-[17px] text-white/70 max-w-[580px] leading-[1.7]">
            WHBS has been customizing Moodle since 1998 — plugin development, theming, hosting, and full-spectrum platform support for educational institutions and enterprises.
          </p>
        </div>
      </section>

      {/* TWO-COLUMN INTRO — What is Moodle */}
      <section className="py-10 px-6 bg-white">
        <div className="container-xl max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_1fr] gap-8 items-center">
            {/* Left: image — reduced ~30% */}
            <Reveal>
              <div className="relative w-full mx-auto rounded-[14px] overflow-hidden shadow-md" style={{ aspectRatio: '4/3', maxWidth: 340 }}>
                <Image
                  src="/images/services/moodle/content.jpg"
                  alt="Moodle customization"
                  fill
                  sizes="(max-width:1024px) 60vw, 340px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* Right: typography, not cards */}
            <Reveal delay={0.08}>
              <div className="max-w-[600px]">
                <h2 className="text-[21px] font-extrabold text-gray-900 tracking-tight mb-2">What is Moodle?</h2>
                <p className="text-[15px] text-gray-600 leading-[1.7]">
                  MOODLE is a learning platform designed to provide educators, administrators and learners with a single robust, secure and integrated system to create personalised learning environments. Some of the important features of moodle are:
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-8 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-3">Philosophy</h2>
            <div className="flex flex-wrap gap-3">
              {PHILOSOPHY.map((p, i) => (
                <span key={i} className="text-[14px] font-semibold px-4 py-2 rounded-full text-blue-700 bg-blue-50 border border-blue-200">{p}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PEDAGOGY */}
      <section className="py-8 px-6 bg-white">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-3">Pedagogy</h2>
            <ul className="space-y-2">
              {PEDAGOGY_POINTS.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-[14px] text-gray-600 leading-[1.6]">{pt}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="py-8 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-3">Standards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STANDARDS.map((s, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3.5 rounded-[10px] bg-white border border-gray-200">
                  <CheckIcon />
                  <span className="text-[14px] font-semibold text-gray-800">{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY MOODLE — feature grid */}
      <section className="py-8 px-6 bg-white">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-4">Why Moodle?</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {WHY_MOODLE.map((w, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="h-full flex items-start gap-2.5 px-4 py-3 rounded-[10px] bg-gray-50 border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                  <CheckIcon />
                  <span className="text-[12px] text-gray-700 leading-[1.5] font-medium">{w}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WHBS DO — feature cards */}
      <section className="py-8 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">What we - WHBS do in Moodle customization?</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7] mb-4">
              We at White House Business Solutions Pvt Ltd, offer various moodle customization services. The following are our moodle customization services and solutions.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {CUSTOMIZATION_SERVICES.map((c, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="h-full px-4 py-3 rounded-[10px] bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-250">
                  <div className="w-6 h-6 rounded-[6px] flex items-center justify-center mb-1.5 text-[10px] font-extrabold" style={{ background: 'rgba(96,165,250,0.12)', color: '#2563EB' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-[13px] text-gray-700 leading-[1.5] font-medium">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-[14px] text-gray-500 leading-[1.65]">
              We offer one stop solution for moodle customization services and we take care of support services also. For further informations mail us{' '}
              <a href="mailto:info@whitehouseit.com" className="font-semibold no-underline" style={{ color: '#0066FF' }}>info@whitehouseit.com</a>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OUR EXPERIENCE IN MOODLE CUSTOMIZATION */}
      <section className="py-8 px-6 bg-white">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">Our experience in Moodle customization</h2>
            <h3 className="text-[15px] font-bold text-gray-800 mb-2">Moodle customization for training centers:</h3>
            <p className="text-[15px] text-gray-600 leading-[1.7]">
              Lot of training centers will cash in the summer holidays by offering various courses. We – White House Business Solutions Pvt Ltd, completed a moodle customization project for a training academy which conducts almost 500 training courses in various categories, especially in multimedia. The customization involves setting up a platform for registration, giving access to the course reading material and taking quiz. It reduces the administration effort of the training center to an extent. There is no need for the bulk printing job for the training materials. Through online it is safe and secure and also the administrator can focus on each student activity and their performance in this moodle platform. White House Business Solutions offer moodle customization for such training centers to make their administration process easy and cost effective.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TAILING THE LEADS */}
      <section className="py-8 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">Tailing the leads</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7]">
              Its true that good work never fails to get appreciation. And as we are providing our services in this industry from 1998, most of our clients are referred clients by our satisfied clients. We can site many examples for this from the past. Most recently we worked with SPMM for a moodle customization project. This organization conducts a periodical assessment for the psychiatrists/counsellors and issue certifications. Based on our work, we have been referred by SPMM to another client QFRCEM, for which we did the same moodle customization process. &ldquo;Customer Satisfaction&rdquo; is not only the motto of our services which remains only in the document and in our manuals but we infact, in real, remain and existing as a proof for this motto. White House Business solutions Pvt Ltd, is a pioneer in custom e-learning development and is the most sought company for e-learning and moodle customization solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* REACHING BEYOND THE BOUNDARIES */}
      <section className="py-8 px-6 bg-white">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">Reaching beyond the boundaries</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7]">
              We had went for a functional visit to our customer in North India, a reputed organization comes under the Ministry of Urban Affairs in New Delhi recently. After the moodle administrator and course administrator training, casual chat took place about our services offered. When we told that we have been in this field from 1998, the clients wondered and told that even that year no one knows eLearning in India and it not even introduced to India. We told them confidentially that we are pioneers in eLearning in India and mainly focussed on international market at the beginning stage. The reason we are sharing this is, some companies in their portfolio and in about us pages will say that they are the real pioneer in eLearning. But true to our experience, it is White House Business Solutions Pvt Ltd, which started worked in CBT training courseware built up gradually into delivering cutting edge eLearning technology solutions worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OCULAR MENUS IN MOODLE CUSTOMIZATION UI */}
      <section className="py-8 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">Ocular menus in moodle customization UI</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7]">
              Customizing moodle as per the client requirements is very tough and tedious job. Because the solution provider has to meet the expectation of the client what they imagines and what they want exactly. Due to the internet exposure and more sample availability, the clients are expecting, even if not possible, all requirements of them should be done right away in the user interface during moodle customization. And as the solution provider we are getting business, and customer satisfaction is our top most priority. One such requirement was getting ocular design menu in the UI of moodle. Having different experts team in designing and scripting side, we overwhelmed the client with more than what they expected. Guess what? They fully utilized our potential in getting the best from that UI design. We achieved it with the use of various teams, and the customer was happy with their dream came true. We undertake creative UI designs along with the moodle customization as we are experienced in this domain for 8+ years.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FROM BRANDING TO HOSTING AND SUPPORTING */}
      <section className="py-8 px-6 bg-white">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">From branding to hosting and supporting</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7]">
              Once you choose White House Business Solutions Pvt Ltd, as your solution provider for moodle customization, there is no looking back and there is no need to look for specialization companies for further works. We at White House Business Solutions Pvt Ltd, have design experts, who are experienced in branding and any other works related to the moodle customization will be taken care by the respective domain experts. After completing the task, we help you in hosting by giving you appropriate server requirements and cloud services. Our role not only ends there, but we will support you throughout the implementation of the project 24 x 7. Your queries any or clarifications will be cleared out in short turn around time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FROM GLOBALISATION TO LOCALISATION */}
      <section className="py-8 px-6 bg-gray-50 border-y border-gray-200">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">From Globalisation to Localisation</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7]">
              There are lot of enquiries nowadays about providing moodle in local languages like hindi, oriya, tamil etc., This isnt a major problem with moodle as these features are available in ready manner. But the clients are wanted to convert their learning material like assessments, content, reading materials into their regional languages. WHBS has a group of SME who are linguistic experts in regional languages including arabic and with less turn around time we will provide you the best services which was ever offered to you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY WE CONSIDER WE ARE STRONG IN MOODLE */}
      <section className="py-8 px-6 bg-white">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">Why we consider we are strong in moodle?</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7]">
              The reason is simple yet trustable. We almost grew up with moodle as it evolved into various versions. We did almost few projects in each version of the moodle. So we know the technical feasibility and what can be incorporated during moodle customization. This sound knowledge along with other technical experise in programming like PHP, makes us worth to consider White House Business Solutions Pvt Ltd for any moodle customization. Our experience in moodle started in the year 2008 and till continuing in 2017 catering for various sectors including educational institutions, training institutions and corporate companies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MOODLE PLUGIN DEVELOPMENT SERVICES */}
      <section className="py-8 px-6 bg-gray-50 border-t border-gray-200">
        <div className="container-xl max-w-[1200px]">
          <Reveal>
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-2">Moodle plugin development services</h2>
            <p className="text-[15px] text-gray-600 leading-[1.7]">
              Some of the functions which client requests during moodle customization can be done easily by developing plugins. We have a team of PHP programmers who can develop the plugins in short time based on the requirements as they have already trained in various such projects. Development of plugins and its usage during the customization requirements considerably reduce the project development life cycle which in turn helps to see the product/services of the clients to come online sooner than the stipulated time.
            </p>
          </Reveal>
        </div>
      </section>

      <InnerCTA heading="Talk to us about Moodle customization" body="Reach out to discuss your Moodle customization requirements with the WHBS team." primaryLabel="Contact Us" primaryHref="/contact" secondaryLabel="All Services" secondaryHref="/services" accentColor="#60A5FA" />
    </>
  )
}
