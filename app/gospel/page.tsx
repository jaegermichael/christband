import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SideButtons } from "@/components/side-buttons"
import Link from "next/link"

const imageCards = [
  {
    src: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1400&q=80",
    alt: "Church worship team singing gospel music",
    caption: "Soulful worship nights with local gospel artists.",
  },
  {
    src: "https://images.unsplash.com/photo-1529988885170-6dc8ce34ce6d?auto=format&fit=crop&w=1400&q=80",
    alt: "Raised hands in praise during concert worship",
    caption: "Raise your hands in praise with Christbrand gospel ministry.",
  },
]

export default function GospelMusicPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFDF7] text-[#2F0B20]">
      <Navbar />

      <main className="flex-1">
        <section className="overflow-hidden bg-gradient-to-br from-[#551839] via-[#7A2A5E] to-[#2F0B20] py-20 text-[#FFFDF7]">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_auto] lg:items-center">
              <div>
                <span className="mb-4 inline-block rounded-full border border-[#D4AF37]/40 bg-[#00000033] px-4 py-1 text-sm uppercase tracking-[0.2em] text-[#F7E7D4]">
                  Gospel Music
                </span>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                  Worship, playlist curation, and gospel ministry for every believer.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#F0E1D8] sm:text-lg">
                  Discover gospel music resources from Zimbabwe and beyond. Share worship recordings, choir performances, and music ministry stories that build faith in every congregation.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/membership"
                    className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#2F0B20] transition hover:bg-[#F0D479]"
                  >
                    Register your ministry
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#F0E1D8] bg-transparent px-6 py-3 text-sm font-semibold text-[#F0E1D8] transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    Share your music
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {imageCards.map((image) => (
                  <div key={image.src} className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-xl backdrop-blur-xl">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                    <div className="border-t border-white/10 bg-[#00000066] px-4 py-3 text-sm text-[#F7E7D4]">
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
              <span className="inline-block rounded-full bg-[#F5F0E8] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#551839]">
                Gospel Resources
              </span>
              <h2 className="text-3xl font-bold text-[#2F0B20] sm:text-4xl">
                Building gospel connection through music, ministry, and media.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-[#7A5A6D]">
                Christbrand helps gospel artists and choirs reach the wider Body of Christ. Our gospel section is designed to feature worship music, broadcast events, and local ministry projects that encourage spiritual growth.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Faith-filled playlists for daily worship",
                  "Choir and music ministry directories",
                  "Gospel event promotion and outreach",
                  "Audio, video, and performance sharing",
                ].map((item) => (
                  <div key={item} className="rounded-3xl border border-[#E8E0D0] bg-[#FFFDF7] p-5 shadow-sm">
                    <p className="text-sm font-semibold text-[#551839]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#E8E0D0] bg-[#FAF6F1] p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#2F0B20]">What we need from you</h3>
              <p className="mt-3 text-base leading-relaxed text-[#7A5A6D]">
                To launch gospel ministry on Christbrand, send us the music assets and contact details that will make this section authentic and ready for worship.
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-[#5F4A5A]">
                <li>• Gospel albums, playlists, and worship recordings</li>
                <li>• Artist / choir bios and ministry stories</li>
                <li>• High-resolution performance or choir images</li>
                <li>• Event dates, venue details, and promotion copy</li>
                <li>• Social links or streaming platform references</li>
              </ul>
              <div className="mt-8 rounded-3xl bg-[#551839] p-6 text-[#FFFDF7]">
                <p className="font-semibold">Production note</p>
                <p className="mt-2 text-sm leading-relaxed text-[#F1E0D8]">
                  Use local gospel imagery and approved audio assets. We can update the page with your own recordings and ministry stories once the client approves them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E8E0D0] bg-[#FFFDF7] py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Submit Worship Audio",
                  text: "Share your gospel songs, choir recordings, and worship playlists to feature on Christbrand.",
                },
                {
                  title: "Promote Gospel Events",
                  text: "List concerts, choir nights, and gospel gatherings for Zimbabwe’s faith community.",
                },
                {
                  title: "Grow a Music Ministry",
                  text: "Connect with churches, pastors, and believers who want gospel music resources.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-[#E8E0D0] bg-white p-8 shadow-sm">
                  <h4 className="text-xl font-semibold text-[#2F0B20]">{item.title}</h4>
                  <p className="mt-4 text-sm leading-relaxed text-[#7A5A6D]">{item.text}</p>
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
