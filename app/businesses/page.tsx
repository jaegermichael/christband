import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Search, MapPin, Phone, Star, Megaphone, ExternalLink } from "lucide-react"

const businesses = [
  { name: "Faith Print Solutions", category: "Printing & Publishing", city: "Harare", phone: "+263 242 750 111", rating: 4.8, description: "Christian publishing, church bulletins, event banners, and faith-based stationery.", featured: true },
  { name: "Shalom Catering Services", category: "Catering", city: "Bulawayo", phone: "+263 292 400 222", rating: 4.7, description: "Quality catering for church events, weddings, conferences, and fellowship gatherings.", featured: true },
  { name: "Kingdom Auto Repairs", category: "Automotive", city: "Harare", phone: "+263 772 333 444", rating: 4.5, description: "Trusted auto repair service run by a Spirit-filled team. Honest pricing guaranteed.", featured: false },
  { name: "Blessed Hands Salon", category: "Beauty & Wellness", city: "Mutare", phone: "+263 774 555 666", rating: 4.9, description: "Professional beauty services in a Christ-centred atmosphere. Bridal packages available.", featured: false },
  { name: "Emmanuel Legal Consultants", category: "Legal Services", city: "Harare", phone: "+263 242 800 777", rating: 4.6, description: "Christian lawyers providing wills, property transfers, and business registration services.", featured: true },
  { name: "Zion Travels & Tours", category: "Travel", city: "Harare", phone: "+263 242 900 888", rating: 4.8, description: "Holy Land tours, church retreats, conference travel, and pilgrimage packages.", featured: false },
  { name: "Grace IT Solutions", category: "Technology", city: "Harare", phone: "+263 773 111 222", rating: 4.7, description: "Website design, church management software, and IT support for ministries.", featured: false },
  { name: "Covenant Construction", category: "Construction", city: "Bulawayo", phone: "+263 292 300 999", rating: 4.5, description: "Church building projects, renovations, and community facility construction.", featured: false },
]

const adverts = [
  { title: "Grand Opening: Faith Print Harare East", business: "Faith Print Solutions", description: "New branch now open! 20% off all church printing orders this month. Visit us at Eastgate Mall, Harare.", cta: "Visit Us" },
  { title: "Wedding Season Special", business: "Shalom Catering Services", description: "Book your church wedding catering before March and receive a free dessert table. Serving Bulawayo and surrounds.", cta: "Book Now" },
  { title: "Holy Land Tour 2026", business: "Zion Travels & Tours", description: "Join our 10-day Holy Land tour in September. Walk where Jesus walked. Early bird prices available now.", cta: "Learn More" },
]

const categories = ["All", "Printing & Publishing", "Catering", "Automotive", "Beauty & Wellness", "Legal Services", "Travel", "Technology", "Construction"]

export default function BusinessesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          badge="Business"
          title="Christian Businesses"
          description="Support fellow believers by discovering and promoting Christian-owned businesses across Zimbabwe."
        />

        <section className="mx-auto max-w-7xl px-4 py-12">
          {/* Search & filters */}
          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-sm md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B5A8A]" />
              <input type="text" placeholder="Search businesses..." className="w-full rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] py-2.5 pl-10 pr-4 text-sm text-[#2D1B4E] placeholder:text-[#6B5A8A] outline-none focus:border-[#4B2E83] focus:ring-1 focus:ring-[#4B2E83]" />
            </div>
            <select className="rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] px-4 py-2.5 text-sm text-[#2D1B4E] outline-none focus:border-[#4B2E83]">
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          {/* Business directory */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {businesses.map((biz) => (
              <div key={biz.name} className="group relative rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-sm transition-all hover:shadow-lg hover:border-[#D4AF37]/50">
                {biz.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#D4AF37]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-[#D4AF37]">Featured</span>
                )}
                <h3 className="font-serif text-lg font-bold text-[#2D1B4E]">{biz.name}</h3>
                <span className="mt-1 inline-block rounded-full bg-[#4B2E83]/10 px-3 py-0.5 text-xs font-medium text-[#4B2E83]">{biz.category}</span>
                <p className="mt-3 text-sm text-[#6B5A8A] leading-relaxed">{biz.description}</p>
                <div className="mt-4 flex flex-wrap gap-3 border-t border-[#F0EBE0] pt-4">
                  <div className="flex items-center gap-1.5 text-sm text-[#6B5A8A]">
                    <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                    {biz.city}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-[#6B5A8A]">
                    <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
                    {biz.phone}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-[#D4AF37]">
                    <Star className="h-3.5 w-3.5 fill-[#D4AF37]" />
                    {biz.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Business Adverts Section */}
          <div id="adverts" className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#C49B2F]">
                <Megaphone className="h-5 w-5 text-[#2D1B4E]" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2D1B4E]">Business Adverts</h2>
                <p className="text-sm text-[#6B5A8A]">Featured promotions from Christian businesses</p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {adverts.map((ad) => (
                <div key={ad.title} className="rounded-2xl border-2 border-[#D4AF37]/30 bg-gradient-to-br from-[#FFFDF7] to-[#F5F0E8] p-6 shadow-sm">
                  <span className="mb-2 inline-block rounded-full bg-[#D4AF37]/10 px-3 py-0.5 text-xs font-semibold uppercase text-[#D4AF37]">Advert</span>
                  <h3 className="font-serif text-lg font-bold text-[#2D1B4E]">{ad.title}</h3>
                  <p className="mt-1 text-xs font-medium text-[#4B2E83]">{ad.business}</p>
                  <p className="mt-3 text-sm text-[#6B5A8A] leading-relaxed">{ad.description}</p>
                  <button className="mt-4 flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#4B2E83] to-[#6B4EAA] px-5 py-2 text-sm font-medium text-[#FFFDF7] transition-all hover:brightness-110">
                    {ad.cta} <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
