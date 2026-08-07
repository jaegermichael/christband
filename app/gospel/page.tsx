import type { Metadata } from "next"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SideButtons } from "@/components/side-buttons"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gospel Music | Christbrand",
  description: "Explore gospel worship playlists, choir performances, and music ministry resources on Christbrand.",
}

const imageCards = [
  {
    src: encodeURI("/images/Christian Group Prayer – African Faith, Unity & Spiritual Growth Inspiration.jpg"),
    alt: "Church worship team singing gospel music",
    caption: "Soulful worship nights with local gospel artists.",
  },
  {
    src: encodeURI("/images/Jesus Banner.jpg"),
    alt: "Raised hands in praise during concert worship",
    caption: "Raise your hands in praise with Christbrand gospel ministry.",
  },
]

export default function GospelMusicPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        <section className="overflow-hidden bg-gradient-to-br from-primary via-secondary to-background py-20 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_auto] lg:items-center">
              <div>
                <span className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-1 text-sm uppercase tracking-[0.2em] text-secondary">
                  Gospel Music
                </span>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                  Worship, playlist curation, and gospel ministry for every believer.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary/80 sm:text-lg">
                  Discover gospel music resources from Zimbabwe and beyond. Share worship recordings, choir performances, and music ministry stories that build faith in every congregation.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/membership"
                    className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-background transition hover:bg-secondary/80"
                  >
                    Register your ministry
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-secondary/50 bg-transparent px-6 py-3 text-sm font-semibold text-secondary transition hover:border-secondary hover:text-secondary"
                  >
                    Share your music
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {imageCards.map((image) => (
                  <div key={image.src} className="overflow-hidden rounded-3xl border border-border bg-card/50 shadow-xl backdrop-blur-xl">
                    <div className="relative h-48">
                      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                    </div>
                    <div className="border-t border-border bg-card/50 px-4 py-3 text-sm text-secondary">
                      {image.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                Gospel Resources
              </span>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Building gospel connection through music, ministry, and media.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                Christbrand helps gospel artists and choirs reach the wider Body of Christ. Our gospel section is designed to feature worship music, broadcast events, and local ministry projects that encourage spiritual growth.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Faith-filled playlists for daily worship",
                  "Choir and music ministry directories",
                  "Gospel event promotion and outreach",
                  "Audio, video, and performance sharing",
                ].map((item) => (
                  <div key={item} className="rounded-3xl border border-border bg-card/50 p-5 shadow-sm">
                    <p className="text-sm font-semibold text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-card/50 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground">What we need from you</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To launch gospel ministry on Christbrand, send us the music assets and contact details that will make this section authentic and ready for worship.
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>• Gospel albums, playlists, and worship recordings</li>
                <li>• Artist / choir bios and ministry stories</li>
                <li>• High-resolution performance or choir images</li>
                <li>• Event dates, venue details, and promotion copy</li>
                <li>• Social links or streaming platform references</li>
              </ul>
              <div className="mt-8 rounded-3xl bg-primary/10 p-6 text-secondary">
                <p className="font-semibold">Production note</p>
                <p className="mt-2 text-sm leading-relaxed text-secondary/80">
                  Use local gospel imagery and approved audio assets. We can update the page with your own recordings and ministry stories once the client approves them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card/50 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Submit Worship Audio",
                  text: "Share your gospel songs, choir recordings, and worship playlists to feature on Christbrand.",
                },
                {
                  title: "Promote Gospel Events",
                  text: "List concerts, choir nights, and gospel gatherings for Zimbabwe's faith community.",
                },
                {
                  title: "Grow a Music Ministry",
                  text: "Connect with churches, pastors, and believers who want gospel music resources.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-border bg-background p-8 shadow-sm">
                  <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SideButtons />
    </div>
  )
}