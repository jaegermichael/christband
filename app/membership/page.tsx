"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { UserPlus, CheckCircle } from "lucide-react"

const cities = ["Harare", "Bulawayo", "Mutare", "Gweru", "Masvingo", "Kwekwe", "Chinhoyi", "Marondera", "Kadoma", "Bindura", "Zvishavane", "Chegutu", "Chipinge", "Norton", "Kariba", "Victoria Falls", "Hwange", "Beitbridge", "Rusape", "Karoi"]
const memberTypes = ["Individual Believer", "Pastor / Church Leader", "Church / Congregation", "Christian Business Owner", "Christian Organisation", "Youth / Student", "Worship Team / Ministry"]
const provinces = ["Harare", "Bulawayo", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"]

export default function MembershipPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          badge="Join Us"
          title="Membership Registration"
          description="Become a part of the Christbrand family. Register as an individual, church, pastor, or business and connect with the Body of Christ in Zimbabwe."
        />

        <section className="mx-auto max-w-3xl px-4 py-12">
          {/* Progress steps */}
          <div className="mb-10 flex items-center justify-center gap-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all ${step >= s ? "bg-gradient-to-br from-[#4B2E83] to-[#6B4EAA] text-[#D4AF37]" : "bg-[#F5F0E8] text-[#6B5A8A]"}`}>
                  {step > s ? <CheckCircle className="h-5 w-5" /> : s}
                </div>
                {s < 3 && <div className={`h-0.5 w-12 rounded ${step > s ? "bg-[#4B2E83]" : "bg-[#E8E0D0]"}`} />}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-sm md:p-8">
            {step === 1 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4B2E83] to-[#6B4EAA]">
                    <UserPlus className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold text-[#2D1B4E]">Personal Information</h2>
                    <p className="text-sm text-[#6B5A8A]">Step 1 of 3</p>
                  </div>
                </div>
                <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setStep(2) }}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-[#2D1B4E]">First Name</label>
                      <input id="firstName" type="text" required placeholder="Enter first name" className="w-full rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] px-4 py-2.5 text-sm text-[#2D1B4E] placeholder:text-[#6B5A8A] outline-none focus:border-[#4B2E83] focus:ring-1 focus:ring-[#4B2E83]" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-[#2D1B4E]">Last Name</label>
                      <input id="lastName" type="text" required placeholder="Enter last name" className="w-full rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] px-4 py-2.5 text-sm text-[#2D1B4E] placeholder:text-[#6B5A8A] outline-none focus:border-[#4B2E83] focus:ring-1 focus:ring-[#4B2E83]" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#2D1B4E]">Email Address</label>
                    <input id="email" type="email" required placeholder="your@email.com" className="w-full rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] px-4 py-2.5 text-sm text-[#2D1B4E] placeholder:text-[#6B5A8A] outline-none focus:border-[#4B2E83] focus:ring-1 focus:ring-[#4B2E83]" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#2D1B4E]">Phone Number</label>
                    <input id="phone" type="tel" required placeholder="+263 7XX XXX XXX" className="w-full rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] px-4 py-2.5 text-sm text-[#2D1B4E] placeholder:text-[#6B5A8A] outline-none focus:border-[#4B2E83] focus:ring-1 focus:ring-[#4B2E83]" />
                  </div>
                  <button type="submit" className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#4B2E83] to-[#6B4EAA] py-3 text-sm font-semibold text-[#FFFDF7] transition-all hover:brightness-110">
                    Next Step
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4B2E83] to-[#6B4EAA]">
                    <UserPlus className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold text-[#2D1B4E]">Location & Member Type</h2>
                    <p className="text-sm text-[#6B5A8A]">Step 2 of 3</p>
                  </div>
                </div>
                <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setStep(3) }}>
                  <div>
                    <label htmlFor="memberType" className="mb-1 block text-sm font-medium text-[#2D1B4E]">Member Type</label>
                    <select id="memberType" required className="w-full rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] px-4 py-2.5 text-sm text-[#2D1B4E] outline-none focus:border-[#4B2E83]">
                      <option value="">Select member type</option>
                      {memberTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="province" className="mb-1 block text-sm font-medium text-[#2D1B4E]">Province</label>
                      <select id="province" required className="w-full rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] px-4 py-2.5 text-sm text-[#2D1B4E] outline-none focus:border-[#4B2E83]">
                        <option value="">Select province</option>
                        {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="city" className="mb-1 block text-sm font-medium text-[#2D1B4E]">City / Town</label>
                      <select id="city" required className="w-full rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] px-4 py-2.5 text-sm text-[#2D1B4E] outline-none focus:border-[#4B2E83]">
                        <option value="">Select city</option>
                        {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="church" className="mb-1 block text-sm font-medium text-[#2D1B4E]">Church / Organisation Name (optional)</label>
                    <input id="church" type="text" placeholder="Name of your church or organisation" className="w-full rounded-xl border border-[#E8E0D0] bg-[#F5F0E8] px-4 py-2.5 text-sm text-[#2D1B4E] placeholder:text-[#6B5A8A] outline-none focus:border-[#4B2E83] focus:ring-1 focus:ring-[#4B2E83]" />
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 rounded-xl border border-[#E8E0D0] py-3 text-sm font-semibold text-[#4B2E83] transition-all hover:bg-[#F5F0E8]">
                      Back
                    </button>
                    <button type="submit" className="flex-1 rounded-xl bg-gradient-to-r from-[#4B2E83] to-[#6B4EAA] py-3 text-sm font-semibold text-[#FFFDF7] transition-all hover:brightness-110">
                      Next Step
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-8">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E8CC6A]">
                  <CheckCircle className="h-10 w-10 text-[#2D1B4E]" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#2D1B4E]">Welcome to Christbrand!</h2>
                <p className="mx-auto mt-3 max-w-md text-[#6B5A8A] leading-relaxed">
                  Your registration is complete. You are now part of the Body of Christ networking family in Zimbabwe. Check your email for confirmation and next steps.
                </p>
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <a href="/subscriptions" className="rounded-xl bg-gradient-to-r from-[#4B2E83] to-[#6B4EAA] px-6 py-3 text-sm font-semibold text-[#FFFDF7] transition-all hover:brightness-110">
                    Choose a Subscription
                  </a>
                  <a href="/" className="rounded-xl border border-[#E8E0D0] px-6 py-3 text-sm font-semibold text-[#4B2E83] transition-all hover:bg-[#F5F0E8]">
                    Back to Home
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
