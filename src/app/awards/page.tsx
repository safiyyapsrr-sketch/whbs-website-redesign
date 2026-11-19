import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import InnerCTA from '@/components/ui/InnerCTA'
import ParallaxBand from '@/components/ui/ParallaxBand'

export const metadata: Metadata = {
  title: 'Awards & Recognition — White House Business Solutions',
  description:
    'WHBS has received Brandon Hall Excellence Awards, eLearning DemoFest recognition, BETT Award finalist status, and is an early adopter of SCORM and xAPI standards.',
}

// ── SHARED STYLES ─────────────────────────────────────────────────────────
// Inline style helpers so we stay in one file without a CSS import

const s = {
  page:    { fontFamily: 'inherit', color: '#1a1a1a' },
  section: { borderBottom: '1px solid #e8e8e8', padding: '52px 0' },
  h2:      { fontSize: 28, fontWeight: 700, color: '#1a1a1a', marginBottom: 18, lineHeight: 1.25 },
  body:    { fontSize: 16, lineHeight: 1.85, color: '#333', marginBottom: 14 },
  quote:   {
    display: 'block',
    background: '#1a1a2e',
    color: '#fff',
    fontSize: 18,
    fontWeight: 700,
    fontStyle: 'italic',
    textAlign: 'center' as const,
    padding: '20px 32px',
    marginBottom: 24,
    lineHeight: 1.4,
    borderRadius: 0,
  },
  img:     {
    borderRadius: 8,
    boxShadow: '0 4px 16px rgba(0,0,0,0.13)',
    display: 'block',
    width: '100%',
    height: 'auto',
  },
  subhead: { fontSize: 18, fontWeight: 700, color: '#222', marginTop: 10, marginBottom: 6 },
  link:    { color: '#0066cc', textDecoration: 'none' },
  small:   { fontSize: 14, lineHeight: 1.7, color: '#333', marginBottom: 10 },
  imgWrap:  { display: 'flex', alignItems: 'center', justifyContent: 'flex-start' },
}


// ── PAGE ──────────────────────────────────────────────────────────────────

export default function AwardsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/awards/awards-hero-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(140deg,rgba(5,8,22,0.92) 0%,rgba(10,15,35,0.87) 55%,rgba(5,8,22,0.90) 100%)' }}
            aria-hidden="true"
          />
        </div>
        <div className="container-xl relative z-10">
          <nav className="flex items-center gap-2 text-[12px] text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors no-underline">Home</Link>
            <span>›</span>
            <Link href="/about" className="hover:text-white transition-colors no-underline">Company</Link>
            <span>›</span>
            <span className="text-white/65 font-medium">Awards &amp; Recognition</span>
          </nav>
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-white tracking-tight mb-4">
            Awards &amp; Recognition
          </h1>
          <p className="text-[17px] text-white/55 max-w-[540px]">
            Recognised globally for excellence in enterprise learning, digital transformation, and technology innovation.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="bg-white" style={s.page}>
        <div className="container-xl px-6">

          {/* ── BRANDON HALL ── Image LEFT, Text RIGHT */}
          <div style={s.section} id="brandon-hall">
            <Reveal>
              <h2 style={s.h2}>Brandon Hall</h2>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Image — left */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/images/awards/brandon-hall.jpg"
                    alt="Brandon Hall Excellence Award"
                    width={500}
                    height={375}
                    style={s.img}
                  />
                </div>
                {/* Text — right */}
                <div>
                  <p style={s.body}>
                    Now entering its 23rd year, the Brandon Hall Group Excellence Awards Program is the most prestigious awards program in the industry. Often times called the &ldquo;Academy Awards&rdquo; by Learning, Talent and Business Executives, the program was one of the first of its kind in the learning industry, which was pioneered in 1994.
                  </p>
                  <p style={s.body}>
                    The Excellence Awards recognize the best organizations that have successfully deployed programs, strategies, modalities, processes, systems, and tools that have achieved measurable results. The program attracts entrants from leading corporations around the world, as well as mid-market and smaller firms.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Full-width quote band — parallax background */}
            <Reveal>
              <div style={{ margin: '28px -24px' }}>
                <ParallaxBand imageSrc="/images/awards/demofest-2008-bg.jpg" overlayOpacity={0.5} py={48}>
                  <div style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
                    <p style={{
                      fontSize: 20,
                      fontWeight: 700,
                      fontStyle: 'italic',
                      color: '#fff',
                      lineHeight: 1.5,
                      margin: 0,
                    }}>
                      &ldquo;Best Advance in Creating an Extended Enterprise Learning Program World Bank Group Open Learning Campus&rdquo;
                    </p>
                  </div>
                </ParallaxBand>
              </div>
            </Reveal>

            {/* Remaining body content — full width */}
            <Reveal>
              <p style={s.body}>
                The Excellence Awards offers over one hundred categories that you can enter in. We see applicants that come from program designers, managers, and executives that want to share their winning programs, strategies, technologies, that involves organisational improvement and performance, effective technology implementations, insightful models, and compelling success stories.
              </p>
              <p style={s.body}>
                Also, solution providers with innovative, cutting-edge technologies, products and services have the opportunity to enter. We are honored to receive applications from organisations around the world ranging from small, medium, large, and global enterprises, to government, not-for-profits, and associations.
              </p>
              <p style={s.body}>
                White House Business Solutions Pvt Ltd, is an eLearning solutions provider for the World Bank Group from the year 2008. We provided services on eLearning content development, support for facilitated and self-paced courses hosted in their Moodle LMS platform, eLearning content development, migration and support for facilitated and self-paced courses in Saba LMS platform. Course development and support in Coursera (for about 16 courses) and Edx platform.
              </p>
              <p style={s.body}>
                We are proud to be the part of the award in which we are one of the vendor for the World Bank Group.
              </p>
            </Reveal>
          </div>

          {/* ── ELEARNING DEMOFEST ── Text LEFT, Image RIGHT */}
          <div style={s.section} id="elearning-demofest">
            <Reveal>
              <h2 style={s.h2}>eLearning Demofest</h2>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text — left */}
                <div>
                  <p style={s.body}>
                    eLearning Demofest provides DevLearn Conference participants with an amazing showcase of eLearning demos. These demos provide ideas and inspiration to everyone who sees them! The best analogy is that it&rsquo;s like a science fair where you move from table to table to view demos of eLearning courses, and talk to their designers and developers about the objectives, tools, technologies, and processes they used, as well as the challenges they faced with their project.
                  </p>
                  <p style={s.body}>
                    Demofest is also a low-key &ldquo;People&rsquo;s Choice&rdquo; style competition where everyone has a chance to vote for their favorite demos.
                  </p>
                </div>
                {/* Image — right */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/images/awards/elearning-demofest.jpg"
                    alt="eLearning DemoFest Award"
                    width={500}
                    height={375}
                    style={s.img}
                  />
                </div>
              </div>
            </Reveal>

            {/* DemoFest 2008 Winner — parallax bg, centered title and dedicated image */}
            <Reveal>
              <div style={{ margin: '28px -24px' }}>
                <ParallaxBand imageSrc="/images/awards/demofest-2008-bg.jpg" overlayOpacity={0.68} py={36}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 20, letterSpacing: '-0.01em' }}>
                      Demofest 2008 winner
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                      <div style={{ maxWidth: 300, width: '100%' }}>
                        <Image
                          src="/images/awards/demofest-2008-winner.jpg"
                          alt="Demofest 2008 Winner"
                          width={300}
                          height={225}
                          style={{ ...s.img, boxShadow: '0 6px 24px rgba(0,0,0,0.5)' }}
                        />
                      </div>
                    </div>
                    <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'left' }}>
                      <p style={{ ...s.small, color: '#b0b8cc' }}>LMS solutions</p>
                      <p style={{ ...s.small, color: '#e0e0e0', fontWeight: 700, marginBottom: 6 }}>
                        Best Synchronous Learning Course
                      </p>
                      <p style={{ ...s.small, color: '#b0b8cc' }}>
                        Developing Interactive Courseware to teach Physics in the Malaysian Classrooms Presented by: Subha Ramiah from LinkQED LLC
                      </p>
                      <p style={{ ...s.small, color: '#8899aa', marginTop: 8 }}>
                        Permanent link:{' '}
                        <a
                          href="http://www.elearningguild.com/showfile.cfm?id=3207"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#79b8ff' }}
                        >
                          www.elearningguild.com/showfile.cfm?id=3207
                        </a>
                      </p>
                      <p style={{ ...s.small, color: '#8899aa' }}>[See Table 21.]</p>
                    </div>
                  </div>
                </ParallaxBand>
              </div>
            </Reveal>
          </div>

          {/* ── BETT AWARD ── Image LEFT, Text RIGHT */}
          <div style={s.section} id="bett-award">
            <Reveal>
              <h2 style={s.h2}>BETT Award 2008 Finalist</h2>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Image — left */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/images/awards/bett-award.jpg"
                    alt="BETT Award 2008 Finalist"
                    width={500}
                    height={375}
                    style={s.img}
                  />
                </div>
                {/* Text — right */}
                <div>
                  <p style={s.body}>
                    Roger Frost&rsquo;s organic chemistry was selected from hundreds of resources to become a BETT Awards 2008 finalist.
                  </p>
                  <p style={s.body}>
                    Colin Penfold of UK government agency Becta explains about the awards, &ldquo;These awards recognize excellent work to harness the power of technology in education.&rdquo;
                  </p>
                  <p style={s.body}>
                    Ray Barker, Director of BESA added, &ldquo;The finalists have all been able to demonstrate technical excellence and appropriate functionality.&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── BETT INFORMATION PANEL — full-width grey, 3-column Q&A ── */}
          <Reveal>
            <div
              style={{
                background: '#f6f7f9',
                margin: '0 -24px',
                padding: '52px 24px',
                position: 'relative',
                overflow: 'hidden',
                borderTop: '1px solid #e8e8e8',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              {/* Subtle large grid */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)',
                  backgroundSize: '130px 130px',
                }}
              />
              <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto' }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginBottom: 36 }}>
                  {/* Column 1 */}
                  <div>
                    <p style={{ ...s.subhead, marginTop: 0 }}>Who judges?</p>
                    <p style={s.body}>
                      This government funded award is distinguished by a rigorous selection process where entries must be endorsed by practitioners, evaluated technically and chosen by a panel of 50 teachers and advisers.
                    </p>
                  </div>
                  {/* Column 2 */}
                  <div>
                    <p style={{ ...s.subhead, marginTop: 0 }}>What does finalist mean?</p>
                    <p style={s.body}>
                      A finalist must be outstanding in what it does. The post-16 category included a business simulation; a web for business studies and a BBC computer tutorial. Organic Chemistry was the only science resource selected.
                    </p>
                  </div>
                  {/* Column 3 */}
                  <div>
                    <p style={{ ...s.subhead, marginTop: 0 }}>Does this mean that mean organic chemistry is good?</p>
                    <p style={s.body}>
                      Organic chemistry was written by Roger Frost and produced by multimedia experts, WHBS. Organic Chemistry is recognised by experts as outstanding.
                    </p>
                  </div>
                </div>
                {/* Centered links */}
                <div style={{ textAlign: 'center', borderTop: '1px solid #e2e4e8', paddingTop: 24 }}>
                  <p style={{ ...s.body, marginBottom: 6 }}>
                    Check out the review here:
                    <br />
                    Permanent link:{' '}
                    <a
                      href="https://organic.rogerfrost.com/links/reviews/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={s.link}
                    >
                      https://organic.rogerfrost.com/links/reviews/
                    </a>
                  </p>
                  <p style={s.body}>
                    Product enquiries:
                    <br />
                    <a
                      href="http://organic.rogerfrost.com/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={s.link}
                    >
                      http://organic.rogerfrost.com/index.html
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── SCORM ADOPTER ── Text LEFT, Image RIGHT */}
          <div style={s.section} id="scorm-adopter">
            <Reveal>
              <h2 style={s.h2}>SCORM Adopter</h2>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text — left */}
                <div>
                  <p style={s.body}>
                    SCORM Adopter– the next level up from being SCORM conformance is for a product to be a SCORM adopter. A product must be SCORM conformant before it can be considered to be a SCORM adopter. The logs that result from a passing test in the ADL Conformance Test Suite are submitted to ADL (see the SCORM Adopters page for more information) and if found to be correct, the product is labeled as a SCORM adopter in the SCORM Adopter Product List (for a particular version of SCORM).
                  </p>
                  <p style={s.body}>
                    In the eLearning, we evolved along with the SCORM standard from scorm 1.2 to scorm 2004. We are capable of converting any non-scrom course to a scorm compatible one, as such volume of the course and the turn over time doesn&rsquo;t matter for us. We are highly experienced in this field with numerous development of scorm courses in our project and product catalogue. Also we are one of the earliest scorm adopter when it is introduced. Check out in this Excel, row number 33 for our company name.
                  </p>
                </div>
                {/* Image — right */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/images/awards/scorm-adopter.jpg"
                    alt="SCORM Adopter certification"
                    width={500}
                    height={375}
                    style={s.img}
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── TIN CAN API ── Image LEFT, Text RIGHT */}
          <div style={{ ...s.section, borderBottom: 'none' }} id="tincan-api">
            <Reveal>
              <h2 style={s.h2}>Tin Can API</h2>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Image — left */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/images/awards/tincan-api.jpg"
                    alt="Tin Can API early adopter"
                    width={500}
                    height={375}
                    style={s.img}
                  />
                </div>
                {/* Text — right */}
                <div>
                  <p style={s.body}>
                    The Tin Can API (sometimes known as the Experience API or xAPI) is a brand new specification for learning technology that makes it possible to collect data about the wide range of experiences a person has (online and offline). This API captures data in a consistent format about a person or group&rsquo;s activities from many technologies. Very different systems are able to securely communicate by capturing and sharing this stream of activities using Tin Can&rsquo;s simple vocabulary.
                  </p>
                  <p style={s.body}>
                    White House Business Solutions Pvt Ltd, is one of the earliest Tin Can API adopter, when it is released. Check out our company in the list of Tin Can API adopters.{' '}
                    <a
                      href="http://tincanapi.com/adopters/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={s.link}
                    >
                      http://tincanapi.com/adopters/
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>{/* /container-xl */}
      </div>{/* /bg-white */}

      <InnerCTA
        heading="Work with a recognised partner"
        sub="Book a discovery call and see how WHBS delivers measurable results for government and enterprise clients."
        cta="Start the Conversation"
        href="/contact"
        accentColor="#FFB020"
      />
    </>
  )
}