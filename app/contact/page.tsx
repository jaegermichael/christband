import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SideButtons } from "@/components/side-buttons"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFDF7] text-[#2F0B20]">
      <Navbar />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#551839] via-[#7A2A5E] to-[#2F0B20] py-24">
          <div className="mx-auto max-w-6xl px-4 text-center text-[#FFFDF7]">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#F0D479]">Contact Us</p>
            <h1 className="text-4xl font-bold sm:text-5xl">Let's bring gospel music and ministry to every church.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#E8D8C6] sm:text-lg">
              Share your ministry details, gospel recordings, choir stories, and event information so Christbrand can help your music ministry reach the full Body of Christ.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-[#E8E0D0] bg-white p-10 shadow-sm">
                <h2 className="text-3xl font-semibold text-[#2F0B20]">Get in touch with Christbrand</h2>
                <p className="mt-4 text-sm leading-relaxed text-[#7A5A6D]">
                  We are ready to feature your gospel music ministry, worship events, and outreach activities. Use the contact details below or send us a message with your ministry assets.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#F8F3EE] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#551839]">Email</p>
                    <p className="mt-3 text-lg font-medium text-[#2F0B20]">info@christbrand.co.zw</p>
                  </div>
                  <div className="rounded-3xl bg-[#F8F3EE] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#551839]">Phone</p>
                    <p className="mt-3 text-lg font-medium text-[#2F0B20]">+263 772 000 000</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#E8E0D0] bg-[#FFFDF7] p-10 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#2F0B20]">Need gospel assets for production?</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#7A5A6D]">
                  Provide audio files, artist biographies, event images, and worship ministry details. We will turn them into a polished gospel music section that reflects your story and worship culture.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[#5F4A5A]">
                  <li>• Gospel songs, choir tracks, and playlists</li>
                  <li>• Choir and worship team profiles</li>
                  <li>• Event posters, dates, and venue details</li>
                  <li>• Social media and streaming links</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#E8E0D0] bg-[#551839] p-10 text-[#FFFDF7] shadow-sm">
              <h3 className="text-2xl font-semibold">Request a gospel music feature</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#F0E1D8]">
                Send a short description of your gospel ministry or worship program and we’ll contact you with the next steps for publication and promotion.
              </p>
              <div className="mt-8 space-y-4 text-sm text-[#F0E1D8]">
                <div>
                  <p className="font-semibold">Email Subject</p>
                  <p>Gospel Music Submission</p>
                </div>
                <div>
                  <p className="font-semibold">Message To Include</p>
                  <p>Ministry name, location, music genre, and a short description of your latest worship project.</p>
                </div>
                <div>
                  <p className="font-semibold">Preferred Response</p>
                  <p>Production readiness, artwork, and audio upload guidance.</p>
                </div>
              </div>
              <a href="mailto:info@christbrand.co.zw?subject=Gospel%20Music%20Submission" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#2F0B20] transition hover:bg-[#F0D479]">
                Email us now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SideButtons />
    </div>
  )
}
