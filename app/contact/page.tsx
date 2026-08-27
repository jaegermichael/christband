import type { Metadata } from "next"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SideButtons } from "@/components/side-buttons"

export const metadata: Metadata = {
  title: "Contact | ChristBand",
  description: "Contact ChristBand for gospel music submissions, ministry features, and worship promotion in Zimbabwe.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary via-secondary to-background py-24 text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-secondary">Contact Us</p>
            <h1 className="text-4xl font-bold sm:text-5xl">Let's bring gospel music and ministry to every church.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-secondary/80 sm:text-lg">
              Share your ministry details, gospel recordings, choir stories, and event information so ChristBand can help your music ministry reach the full Body of Christ.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="relative h-72 overflow-hidden rounded-[2rem] border border-border bg-card/50 shadow-brand-sm sm:h-96">
            <Image
              src={encodeURI("/images/St Francis Church ⛪  Sri Lanka.jpg")}
              alt="Church interior with worshippers"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-border bg-card/50 p-10 shadow-sm">
                <h2 className="text-3xl font-semibold text-foreground">Get in touch with ChristBand</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  We are ready to feature your gospel music ministry, worship events, and outreach activities. Use the contact details below or send us a message with your ministry assets.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-3xl bg-secondary/10 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Email</p>
                    <p className="mt-3 text-lg font-medium text-foreground">info@christbrand.co.zw</p>
                  </div>
                  <div className="rounded-3xl bg-secondary/10 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Phone</p>
                    <p className="mt-3 text-lg font-medium text-foreground">+263 772 000 000</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-card/50 p-10 shadow-sm">
                <h3 className="text-2xl font-semibold text-foreground">Need gospel assets for production?</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Provide audio files, artist biographies, event images, and worship ministry details. We will turn them into a polished gospel music section that reflects your story and worship culture.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li>• Gospel songs, choir tracks, and playlists</li>
                  <li>• Choir and worship team profiles</li>
                  <li>• Event posters, dates, and venue details</li>
                  <li>• Social media and streaming links</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-primary/10 p-10 text-primary-foreground shadow-sm">
              <h3 className="text-2xl font-semibold">Request a gospel music feature</h3>
              <p className="mt-4 text-sm leading-relaxed text-secondary/80">
                Send a short description of your gospel ministry or worship program and we’ll contact you with the next steps for publication and promotion.
              </p>
              <div className="mt-8 space-y-4 text-sm text-secondary/80">
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
              <a href="mailto:info@christbrand.co.zw?subject=Gospel%20Music%20Submission" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-background transition hover:bg-secondary/80">
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