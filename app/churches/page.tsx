import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Search, MapPin, Phone, Clock, ChevronRight } from "lucide-react"

const churches = [
  { name: "Grace Fellowship Church", denomination: "Pentecostal", city: "Harare", province: "Harare", address: "123 Samora Machel Ave, Harare", phone: "+263 242 700 123", services: "Sun 8am, 10am, 2pm" },
  { name: "Victory Bible Church", denomination: "Evangelical", city: "Bulawayo", province: "Bulawayo", address: "45 Fort Street, Bulawayo", phone: "+263 292 600 456", services: "Sun 9am, 11am" },
  { name: "Living Waters Ministries", denomination: "Charismatic", city: "Mutare", province: "Manicaland", address: "78 Herbert Chitepo St, Mutare", phone: "+263 272 500 789", services: "Sun 8:30am, 10:30am" },
  { name: "Christ Embassy Harare", denomination: "Pentecostal", city: "Harare", province: "Harare", address: "256 Enterprise Road, Harare", phone: "+263 242 800 321", services: "Sun 9am, 12pm" },
  { name: "Abundant Life Church", denomination: "Baptist", city: "Gweru", province: "Midlands", address: "12 Main Street, Gweru", phone: "+263 254 200 654", services: "Sun 9am, 11am" },
  { name: "Faith World Ministries", denomination: "Charismatic", city: "Masvingo", province: "Masvingo", address: "34 Robertson St, Masvingo", phone: "+263 239 300 987", services: "Sun 8am, 10am" },
  { name: "Kingdom Life Centre", denomination: "Non-Denominational", city: "Chinhoyi", province: "Mashonaland West", address: "5 Magamba Way, Chinhoyi", phone: "+263 267 100 456", services: "Sun 9am, 11:30am" },
  { name: "New Life Covenant Church", denomination: "Reformed", city: "Kwekwe", province: "Midlands", address: "89 Robert Mugabe Way, Kwekwe", phone: "+263 255 400 111", services: "Sun 8:30am, 10:30am" },
]

const provinces = ["All Provinces", "Harare", "Bulawayo", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"]
const denominations = ["All Denominations", "Pentecostal", "Evangelical", "Charismatic", "Baptist", "Reformed", "Anglican", "Catholic", "Methodist", "Non-Denominational"]

export default function ChurchesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          badge="Directory"
          title="Church Directory"
          description="Find a church home across Zimbabwe. Browse by denomination, province, or city to connect with a local congregation."
        />

        <section className="mx-auto max-w-7xl px-4 py-12">
          {/* Filters */}
          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-sm md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B5A8A]" />
              <input
                type="text"
                placeholder="Search churches..."
                className="w-full rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] py-2.5 pl-10 pr-4 text-sm text-[#2D1B4E] placeholder:text-[#6B5A8A] outline-none focus:border-[#4B2E83] focus:ring-1 focus:ring-[#4B2E83]"
              />
            </div>
            <select className="rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] px-4 py-2.5 text-sm text-[#2D1B4E] outline-none focus:border-[#4B2E83]">
              {provinces.map((p) => <option key={p}>{p}</option>)}
            </select>
            <select className="rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] px-4 py-2.5 text-sm text-[#2D1B4E] outline-none focus:border-[#4B2E83]">
              {denominations.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>

          {/* Church list */}
          <div className="grid gap-5 md:grid-cols-2">
            {churches.map((church) => (
              <div key={church.name} className="group rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-sm transition-all hover:shadow-lg hover:border-[#D4AF37]/50">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2D1B4E]">{church.name}</h3>
                    <span className="mt-1 inline-block rounded-full bg-[#4B2E83]/10 px-3 py-0.5 text-xs font-medium text-[#4B2E83]">{church.denomination}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#D4AF37] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-[#6B5A8A]">
                    <MapPin className="h-4 w-4 text-[#D4AF37]" />
                    {church.address}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B5A8A]">
                    <Phone className="h-4 w-4 text-[#D4AF37]" />
                    {church.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B5A8A]">
                    <Clock className="h-4 w-4 text-[#D4AF37]" />
                    {church.services}
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
