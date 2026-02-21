import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { CalendarDays, MapPin, Clock, Users, Tag } from "lucide-react"

const events = [
  { title: "National Day of Prayer", date: "2026-03-15", time: "6:00 AM - 12:00 PM", location: "National Sports Stadium, Harare", organiser: "Zimbabwe Council of Churches", category: "Prayer", attendees: "5,000+", description: "A gathering of believers from all denominations to pray for the nation, families, and the church in Zimbabwe." },
  { title: "Youth Revival Conference 2026", date: "2026-04-10", time: "9:00 AM - 5:00 PM", location: "HICC, Harare", organiser: "Evangelical Fellowship of Zimbabwe", category: "Conference", attendees: "2,000+", description: "An annual conference empowering young people with the Word of God, worship, and leadership training." },
  { title: "Women of Virtue Retreat", date: "2026-04-25", time: "8:00 AM - 4:00 PM", location: "Lake Chivero Resort, Harare", organiser: "Grace Fellowship Church", category: "Retreat", attendees: "300", description: "A day retreat for women seeking spiritual refreshment, fellowship, and empowerment." },
  { title: "Easter Worship Concert", date: "2026-04-05", time: "5:00 PM - 9:00 PM", location: "HICC, Harare", organiser: "Multiple Churches", category: "Worship", attendees: "3,000+", description: "A joint Easter celebration featuring top gospel artists and worship teams from across Zimbabwe." },
  { title: "Pastors & Leaders Summit", date: "2026-05-08", time: "8:00 AM - 3:00 PM", location: "Rainbow Towers, Harare", organiser: "Christbrand", category: "Summit", attendees: "500", description: "Strategic summit for church leaders to discuss growth, collaboration, and community impact." },
  { title: "Marriage Enrichment Weekend", date: "2026-06-12", time: "Friday 5 PM - Sunday 12 PM", location: "Troutbeck Resort, Nyanga", organiser: "Family Life Ministries", category: "Retreat", attendees: "100 couples", description: "A weekend away for married couples to strengthen their relationship through biblical teaching and fun activities." },
]

const categories = ["All Events", "Prayer", "Conference", "Retreat", "Worship", "Summit"]
const months = ["All Months", "March 2026", "April 2026", "May 2026", "June 2026"]

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
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
                <button key={cat} className="rounded-full border border-[#E8E0D0] bg-[#FFFFFF] px-4 py-2 text-sm text-[#2D1B4E] transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 first:bg-[#4B2E83] first:text-[#FFFDF7] first:border-[#4B2E83]">
                  {cat}
                </button>
              ))}
            </div>
            <select className="rounded-full border border-[#E8E0D0] bg-[#FFFFFF] px-4 py-2 text-sm text-[#2D1B4E] outline-none">
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
                <div key={event.title} className="group flex gap-5 rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-sm transition-all hover:shadow-lg hover:border-[#D4AF37]/50">
                  {/* Date badge */}
                  <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#4B2E83] to-[#6B4EAA] text-center">
                    <span className="text-lg font-bold text-[#D4AF37] leading-none">{day}</span>
                    <span className="text-[10px] font-semibold uppercase text-[#FFFDF7]">{month}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif text-lg font-bold text-[#2D1B4E]">{event.title}</h3>
                      <span className="rounded-full bg-[#D4AF37]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-[#D4AF37]">{event.category}</span>
                    </div>
                    <p className="mt-2 text-sm text-[#6B5A8A] leading-relaxed">{event.description}</p>
                    <div className="mt-3 flex flex-wrap gap-4">
                      <div className="flex items-center gap-1.5 text-xs text-[#6B5A8A]">
                        <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#6B5A8A]">
                        <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#6B5A8A]">
                        <Users className="h-3.5 w-3.5 text-[#D4AF37]" />
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
