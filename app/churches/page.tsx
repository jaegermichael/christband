"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Search, MapPin, Phone, Clock, ChevronRight, Church as ChurchIcon } from "lucide-react"

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
  const [query, setQuery] = useState("")
  const [province, setProvince] = useState("All Provinces")
  const [denomination, setDenomination] = useState("All Denominations")

  const filtered = useMemo(() => {
    return churches.filter((church) => {
      const matchesQuery = church.name.toLowerCase().includes(query.toLowerCase()) ||
        church.address.toLowerCase().includes(query.toLowerCase())
      const matchesProvince = province === "All Provinces" || church.province === province
      const matchesDenom = denomination === "All Denominations" || church.denomination === denomination
      return matchesQuery && matchesProvince && matchesDenom
    })
  }, [query, province, denomination])

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge="Directory"
          title="Church Directory"
          description="Find a church home across Zimbabwe. Browse by denomination, province, or city to connect with a local congregation."
        />

        <section className="mx-auto max-w-7xl px-4 py-12">
          {/* Filters */}
          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-card/50 p-6 shadow-brand-sm md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A5A6D]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search churches..."
                className="w-full rounded-xl border border-input bg-background/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="rounded-xl border border-input bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            >
              {provinces.map((p) => <option key={p}>{p}</option>)}
            </select>
            <select
              value={denomination}
              onChange={(e) => setDenomination(e.target.value)}
              className="rounded-xl border border-input bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            >
              {denominations.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>

          {/* Results count */}
          <p className="mb-4 text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "church" : "churches"} found
          </p>

          {/* Church list */}
          {filtered.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {filtered.map((church) => (
                <div key={church.name} className="group rounded-2xl border border-border bg-card/50 p-6 shadow-brand-sm transition-all hover:shadow-brand-lg hover:border-secondary/50">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground">{church.name}</h3>
                      <span className="mt-1 inline-block rounded-full bg-primary/20 px-3 py-0.5 text-xs font-medium text-secondary">{church.denomination}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-[#D4AF37] opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-secondary" />
                      {church.address}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 text-secondary" />
                      {church.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-secondary" />
                      {church.services}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-16 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
                <ChurchIcon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">No churches found</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Try adjusting your search or filters. You can also register your church to be listed in the directory.
              </p>
              <a
                href="/membership?type=church"
                className="mt-6 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-brand transition-all hover:shadow-brand-lg hover:brightness-110 active:scale-[0.98]"
              >
                Register Your Church
              </a>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}