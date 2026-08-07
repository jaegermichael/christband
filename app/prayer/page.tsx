"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { HandHeart, Send, Heart, Clock, User } from "lucide-react"

const prayerRequests = [
  { name: "Tendai M.", city: "Harare", request: "Please pray for my mother who is unwell. She has been in hospital for 2 weeks. We trust God for her complete healing.", time: "2 hours ago", prayers: 24 },
  { name: "Blessing N.", city: "Bulawayo", request: "Praying for a breakthrough in my business. I have been faithful and trust that God will open doors for provision.", time: "5 hours ago", prayers: 18 },
  { name: "Grace C.", city: "Mutare", request: "Please stand with me in prayer for my children's education. Trusting God for school fees and wisdom for their studies.", time: "8 hours ago", prayers: 31 },
  { name: "Joseph K.", city: "Gweru", request: "Pray for our church building project. We need $15,000 to complete the roof. God is able!", time: "12 hours ago", prayers: 42 },
  { name: "Ruth T.", city: "Masvingo", request: "Seeking God's guidance for my career path. I recently graduated and need direction. Jeremiah 29:11.", time: "1 day ago", prayers: 27 },
  { name: "Anonymous", city: "Harare", request: "Please pray for my marriage. We are going through a difficult season and need God's intervention and wisdom.", time: "1 day ago", prayers: 56 },
  { name: "Pastor James M.", city: "Chinhoyi", request: "Intercede for our evangelism outreach in rural Mashonaland West. Pray for open hearts and safe travels.", time: "2 days ago", prayers: 35 },
  { name: "Chipo D.", city: "Kwekwe", request: "Grateful testimony: God healed me from a long-term illness! I am back to full health. Glory to God!", time: "2 days ago", prayers: 89 },
]

export default function PrayerPage() {
  const [formData, setFormData] = useState({ name: "", city: "", request: "", anonymous: false })

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge="Prayer"
          title="Prayer Corner"
          description="Share your prayer requests and stand in faith with believers across Zimbabwe. We are one body, praying together."
        />

        <section className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Submit form */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl border border-border bg-card/50 p-6 shadow-brand-sm">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                    <Send className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h2 className="font-serif text-xl font-bold text-foreground">Submit a Prayer</h2>
                </div>

                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="prayer-name" className="mb-1 block text-sm font-medium text-foreground">Your Name</label>
                    <input
                      id="prayer-name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="prayer-city" className="mb-1 block text-sm font-medium text-foreground">City</label>
                    <select
                      id="prayer-city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
                    >
                      <option value="">Select city</option>
                      {["Harare", "Bulawayo", "Mutare", "Gweru", "Masvingo", "Kwekwe", "Chinhoyi", "Marondera", "Kadoma", "Bindura"].map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="prayer-request" className="mb-1 block text-sm font-medium text-foreground">Prayer Request</label>
                    <textarea
                      id="prayer-request"
                      rows={4}
                      placeholder="Share your prayer request here..."
                      value={formData.request}
                      onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={formData.anonymous}
                      onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                      className="rounded border-input text-primary focus:ring-primary"
                    />
                    Post anonymously
                  </label>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-primary to-secondary py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]"
                  >
                    Submit Prayer Request
                  </button>
                </form>
              </div>
            </div>

            {/* Prayer wall */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 flex items-center gap-3 font-serif text-2xl font-bold text-foreground">
                <HandHeart className="h-6 w-6 text-secondary" />
                Prayer Wall
              </h2>
              <div className="flex flex-col gap-4">
                {prayerRequests.map((prayer, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card/50 p-5 shadow-brand-sm transition-all hover:shadow-brand">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                          <User className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-foreground">{prayer.name}</span>
                          <span className="ml-2 text-xs text-muted-foreground">{prayer.city}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {prayer.time}
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{prayer.request}</p>
                    <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                      <button className="flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-primary active:scale-[0.98]">
                        <Heart className="h-4 w-4" />
                        Pray ({prayer.prayers})
                      </button>
                      <span className="text-xs text-muted-foreground">{prayer.prayers} people praying</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}