import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { SectionCards } from "@/components/section-cards"
import { HomeAds } from "@/components/home-ads"
import { HomeAbout } from "@/components/home-about"
import { HomeCTA } from "@/components/home-cta"
import { SideButtons } from "@/components/side-buttons"

export default function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <HomeAds />
      <main id="main-content" className="flex-1">
        <Hero />
        <SectionCards />
        <HomeAbout />
        <HomeCTA />
      </main>
      <SideButtons />
      <Footer />
    </div>
  )
}