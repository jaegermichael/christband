import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Search, MapPin, Phone, BookOpen, Mail } from "lucide-react"

const pastors = [
  { name: "Pastor Emmanuel Chikwanda", title: "Senior Pastor", church: "Grace Fellowship Church", city: "Harare", phone: "+263 772 100 001", email: "pastor.e@grace.co.zw", bio: "Over 20 years of ministry experience. Passionate about community transformation and youth development." },
  { name: "Bishop Florence Mutasa", title: "Bishop", church: "Victory Bible Church", city: "Bulawayo", phone: "+263 773 200 002", email: "bishop.f@victory.co.zw", bio: "Pioneering church leader dedicated to women empowerment and family ministry in the Matabeleland region." },
  { name: "Pastor David Moyo", title: "Lead Pastor", church: "Living Waters Ministries", city: "Mutare", phone: "+263 774 300 003", email: "pastor.d@livingwaters.co.zw", bio: "Anointed teacher and evangelist with a heart for reaching the Eastern Highlands communities." },
  { name: "Reverend Sarah Ncube", title: "Reverend", church: "Christ Embassy Harare", city: "Harare", phone: "+263 775 400 004", email: "rev.s@christembassy.co.zw", bio: "Known for powerful worship ministry and discipleship programmes across Harare." },
  { name: "Pastor Joseph Nyathi", title: "Founder & Pastor", church: "Abundant Life Church", city: "Gweru", phone: "+263 776 500 005", email: "pastor.j@abundant.co.zw", bio: "Church planter and author. Founded 5 congregations across the Midlands province." },
  { name: "Apostle Grace Mlambo", title: "Apostle", church: "Faith World Ministries", city: "Masvingo", phone: "+263 777 600 006", email: "apostle.g@faithworld.co.zw", bio: "Prophetic voice in the Southern region. Active in humanitarian work and community development." },
]

export default function PastorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          badge="Pastors"
          title="Pastors Directory"
          description="Connect with spiritual leaders across Zimbabwe. Find pastors, bishops, and church leaders in your province."
        />

        <section className="mx-auto max-w-7xl px-4 py-12">
          {/* Search */}
          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-sm md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B5A8A]" />
              <input
                type="text"
                placeholder="Search pastors by name, church, or city..."
                className="w-full rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] py-2.5 pl-10 pr-4 text-sm text-[#2D1B4E] placeholder:text-[#6B5A8A] outline-none focus:border-[#4B2E83] focus:ring-1 focus:ring-[#4B2E83]"
              />
            </div>
          </div>

          {/* Pastors grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastors.map((pastor) => (
              <div key={pastor.name} className="group rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-sm transition-all hover:shadow-lg hover:border-[#D4AF37]/50">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#4B2E83] to-[#6B4EAA]">
                  <span className="font-serif text-xl font-bold text-[#D4AF37]">{pastor.name.split(" ").slice(-1)[0][0]}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2D1B4E]">{pastor.name}</h3>
                <span className="mt-1 inline-block rounded-full bg-[#D4AF37]/10 px-3 py-0.5 text-xs font-semibold text-[#D4AF37]">{pastor.title}</span>
                <p className="mt-3 text-sm text-[#6B5A8A] leading-relaxed">{pastor.bio}</p>
                <div className="mt-4 flex flex-col gap-2 border-t border-[#F0EBE0] pt-4">
                  <div className="flex items-center gap-2 text-sm text-[#6B5A8A]">
                    <BookOpen className="h-4 w-4 text-[#D4AF37]" />
                    {pastor.church}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B5A8A]">
                    <MapPin className="h-4 w-4 text-[#D4AF37]" />
                    {pastor.city}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B5A8A]">
                    <Phone className="h-4 w-4 text-[#D4AF37]" />
                    {pastor.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B5A8A]">
                    <Mail className="h-4 w-4 text-[#D4AF37]" />
                    {pastor.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
