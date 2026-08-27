import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { CalendarDays, MapPin, Clock, Users, Tag } from "lucide-react"

const events = [
  { title: "National Day of Prayer", date: "2026-03-15", time: "6:00 AM - 12:00 PM", location: "National Sports Stadium, Harare", organiser: "Zimbabwe Council of Churches", category: "Prayer", attendees: "5,000+", description: "A gathering of believers from all denominations to pray for the nation, families, and the church in Zimbabwe.", image: "Christian Group Prayer – African Faith, Unity & Spiritual Growth Inspiration.jpg" },
  { title: "Youth Revival Conference 2026", date: "2026-04-10", time: "9:00 AM - 5:00 PM", location: "HICC, Harare", organiser: "Evangelical Fellowship of Zimbabwe", category: "Conference", attendees: "2,000+", description: "An annual conference empowering young people with the Word of God, worship, and leadership training.", image: "Imagenes AI religiosas gratis.jpg" },
  { title: "Women of Virtue Retreat", date: "2026-04-25", time: "8:00 AM - 4:00 PM", location: "Lake Chivero Resort, Harare", organiser: "Grace Fellowship Church", category: "Retreat", attendees: "300", description: "A day retreat for women seeking spiritual refreshment, fellowship, and empowerment.", image: "Imagenes AI religiosas gratis (1).jpg" },
  { title: "Easter Worship Concert", date: "2026-04-05", time: "5:00 PM - 9:00 PM", location: "HICC, Harare", organiser: "Multiple Churches", category: "Worship", attendees: "3,000+", description: "A joint Easter celebration featuring top gospel artists and worship teams from across Zimbabwe.", image: "Jesus Banner.jpg" },
  { title: "Pastors & Leaders Summit", date: "2026-05-08", time: "8:00 AM - 3:00 PM", location: "Rainbow Towers, Harare", organiser: "ChristBand", category: "Summit", attendees: "500", description: "Strategic summit for church leaders to discuss growth, collaboration, and community impact.", image: "10.jpg" },
  { title: "Marriage Enrichment Weekend", date: "2026-06-12", time: "Friday 5 PM - Sunday 12 PM", location: "Troutbeck Resort, Nyanga", organiser: "Family Life Ministries", category: "Retreat", attendees: "100 couples", description: "A weekend away for married couples to strengthen their relationship through biblical teaching and fun activities.", image: "St Francis Church ⛪  Sri Lanka.jpg" },
]

const categories = ["All Events", "Prayer", "Conference", "Retreat", "Worship", "Summit"]
const months = ["All Months", "March 2026", "April 2026", "May 2026", "June 2026"]

export default function EventsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge="Events"
          title="Events Calendar"
          description="Stay connected with Christian events, conferences, retreats, and worship gatherings happening across Zimbabwe."
        />

        <section className="mx-auto max-w-7xl px-4 py-12">
          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat} className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-foreground transition-all hover:border-secondary hover:bg-secondary/10 first:bg-primary first:text-primary-foreground first:border-primary">
                  {cat}
                </button>
              ))}
            </div>
            <select className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-foreground outline-none">
              {months.map((m) => <option key={m}>{m}</option>)}
            </select>
          </div>

          {/* Events grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {events.map((event) => {
              const dateObj = new Date(event.date)
              const day = dateObj.getDate()
              const month = dateObj.toLocaleString("en", { month: "short" }).toUpperCase()
              return (
                <div key={event.title} className="group overflow-hidden rounded-2xl border border-border bg-card/50 shadow-brand-sm transition-all hover:shadow-brand-lg hover:border-secondary/50">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={encodeURI(`/images/${event.image}`)}
                      alt={event.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                    {/* Date badge */}
                    <div className="absolute bottom-3 left-4 flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-secondary text-center shadow-brand">
                      <span className="text-lg font-bold text-background leading-none">{day}</span>
                      <span className="text-[10px] font-semibold uppercase text-background">{month}</span>
                    </div>
                    <span className="absolute bottom-3 right-4 rounded-full bg-background/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-background backdrop-blur-sm">{event.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-foreground">{event.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                    <div className="mt-3 flex flex-wrap gap-4">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-secondary" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 text-secondary" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Users className="h-3.5 w-3.5 text-secondary" />
                        {event.attendees}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}