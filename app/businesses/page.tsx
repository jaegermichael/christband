import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Search, MapPin, Phone, Star, Megaphone, ExternalLink } from "lucide-react"

const businesses = [
  { name: "Faith Print Solutions", category: "Printing & Publishing", city: "Harare", phone: "+263 242 750 111", rating: 4.8, description: "Christian publishing, church bulletins, event banners, and faith-based stationery.", featured: true, image: "download.jpg" },
  { name: "Shalom Catering Services", category: "Catering", city: "Bulawayo", phone: "+263 292 400 222", rating: 4.7, description: "Quality catering for church events, weddings, conferences, and fellowship gatherings.", featured: true, image: "Imagenes AI religiosas gratis.jpg" },
  { name: "Kingdom Auto Repairs", category: "Automotive", city: "Harare", phone: "+263 772 333 444", rating: 4.5, description: "Trusted auto repair service run by a Spirit-filled team. Honest pricing guaranteed.", featured: false, image: "10.jpg" },
  { name: "Blessed Hands Salon", category: "Beauty & Wellness", city: "Mutare", phone: "+263 774 555 666", rating: 4.9, description: "Professional beauty services in a Christ-centred atmosphere. Bridal packages available.", featured: false, image: "Imagenes AI religiosas gratis (1).jpg" },
  { name: "Emmanuel Legal Consultants", category: "Legal Services", city: "Harare", phone: "+263 242 800 777", rating: 4.6, description: "Christian lawyers providing wills, property transfers, and business registration services.", featured: true, image: "download (1).jpg" },
  { name: "Zion Travels & Tours", category: "Travel", city: "Harare", phone: "+263 242 900 888", rating: 4.8, description: "Holy Land tours, church retreats, conference travel, and pilgrimage packages.", featured: false, image: "St Francis Church ⛪  Sri Lanka.jpg" },
  { name: "Grace IT Solutions", category: "Technology", city: "Harare", phone: "+263 773 111 222", rating: 4.7, description: "Website design, church management software, and IT support for ministries.", featured: false, image: "download (2).jpg" },
  { name: "Covenant Construction", category: "Construction", city: "Bulawayo", phone: "+263 292 300 999", rating: 4.5, description: "Church building projects, renovations, and community facility construction.", featured: false, image: "Welcome background.jpg" },
]

const adverts = [
  { title: "Grand Opening: Faith Print Harare East", business: "Faith Print Solutions", description: "New branch now open! 20% off all church printing orders this month. Visit us at Eastgate Mall, Harare.", cta: "Visit Us", image: "download.jpg" },
  { title: "Wedding Season Special", business: "Shalom Catering Services", description: "Book your church wedding catering before March and receive a free dessert table. Serving Bulawayo and surrounds.", cta: "Book Now", image: "Imagenes AI religiosas gratis.jpg" },
  { title: "Holy Land Tour 2026", business: "Zion Travels & Tours", description: "Join our 10-day Holy Land tour in September. Walk where Jesus walked. Early bird prices available now.", cta: "Learn More", image: "St Francis Church ⛪  Sri Lanka.jpg" },
]

const categories = ["All", "Printing & Publishing", "Catering", "Automotive", "Beauty & Wellness", "Legal Services", "Travel", "Technology", "Construction"]

export default function BusinessesPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge="Business"
          title="Christian Businesses"
          description="Support fellow believers by discovering and promoting Christian-owned businesses across Zimbabwe."
        />

        <section className="mx-auto max-w-7xl px-4 py-12">
          {/* Search & filters */}
          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-card/50 p-6 shadow-brand-sm md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />
              <input type="text" placeholder="Search businesses..." className="w-full rounded-xl border border-input bg-background/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
            </div>
            <select className="rounded-xl border border-input bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary">
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          {/* Business directory */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {businesses.map((biz) => (
              <div key={biz.name} className="group overflow-hidden rounded-2xl border border-border bg-card/50 shadow-brand-sm transition-all hover:shadow-brand-lg hover:border-secondary/50">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={encodeURI(`/images/${biz.image}`)}
                    alt={biz.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  {biz.featured && (
                    <span className="absolute right-3 top-3 rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold uppercase text-background">Featured</span>
                  )}
                  <div className="absolute bottom-3 left-4">
                    <h3 className="font-serif text-lg font-bold text-primary-foreground">{biz.name}</h3>
                    <span className="mt-1 inline-block rounded-full bg-primary-foreground/20 px-3 py-0.5 text-xs font-medium text-primary-foreground backdrop-blur-sm">{biz.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{biz.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-4">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-secondary" />
                      {biz.city}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Phone className="h-3.5 w-3.5 text-secondary" />
                      {biz.phone}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-secondary">
                      <Star className="h-3.5 w-3.5 fill-secondary" />
                      {biz.rating}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Business Adverts Section */}
          <div id="adverts" className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-primary">
                <Megaphone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">Business Adverts</h2>
                <p className="text-sm text-muted-foreground">Featured promotions from Christian businesses</p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {adverts.map((ad) => (
                <div key={ad.title} className="group overflow-hidden rounded-2xl border-2 border-secondary/30 bg-gradient-to-br from-card to-secondary/10 shadow-brand-sm">
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={encodeURI(`/images/${ad.image}`)}
                      alt={ad.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold uppercase text-primary-foreground">Advert</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-foreground">{ad.title}</h3>
                    <p className="mt-1 text-xs font-medium text-secondary">{ad.business}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{ad.description}</p>
                    <button className="mt-4 flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]">
                      {ad.cta} <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
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