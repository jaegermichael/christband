import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Check, Star, Crown, Zap, Shield, Smartphone } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic access to the Christbrand community.",
    icon: Star,
    features: [
      "Browse Church Directory",
      "Browse Pastors Directory",
      "View Events Calendar",
      "Access Prayer Corner",
      "Read Word of Motivation",
      "Basic member profile",
    ],
    cta: "Get Started Free",
    popular: false,
    gradient: "from-[#F5F0E8] to-[#FFFFFF]",
    borderColor: "border-[#E8E0D0]",
    ctaStyle: "border border-[#4B2E83] text-[#4B2E83] hover:bg-[#F5F0E8]",
  },
  {
    name: "Standard",
    price: "$5",
    period: "per month",
    description: "Perfect for active members who want full community access.",
    icon: Crown,
    features: [
      "Everything in Free plan",
      "List your business in directory",
      "Post prayer requests",
      "Access Christian Books library",
      "Post events to calendar",
      "Priority member support",
      "Business advert (1 listing)",
    ],
    cta: "Subscribe Now",
    popular: true,
    gradient: "from-[#4B2E83] to-[#6B4EAA]",
    borderColor: "border-[#D4AF37]",
    ctaStyle: "bg-gradient-to-r from-[#D4AF37] to-[#E8CC6A] text-[#2D1B4E] hover:brightness-110",
  },
  {
    name: "Premium",
    price: "$15",
    period: "per month",
    description: "For churches, pastors, and businesses wanting maximum visibility.",
    icon: Zap,
    features: [
      "Everything in Standard plan",
      "Featured business listing",
      "Unlimited business adverts",
      "Featured in Church Directory",
      "Shop listing access",
      "Priority event placement",
      "Dedicated account manager",
      "Analytics dashboard",
    ],
    cta: "Go Premium",
    popular: false,
    gradient: "from-[#F5F0E8] to-[#FFFFFF]",
    borderColor: "border-[#E8E0D0]",
    ctaStyle: "bg-gradient-to-r from-[#4B2E83] to-[#6B4EAA] text-[#FFFDF7] hover:brightness-110",
  },
]

const paymentMethods = [
  { name: "Paynow", description: "Pay securely with Paynow Zimbabwe" },
  { name: "EcoCash", description: "Mobile money via EcoCash" },
  { name: "ZiG", description: "Pay in Zimbabwe Gold (ZiG) currency" },
]

export default function SubscriptionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          badge="Pricing"
          title="Subscription Plans"
          description="Choose the plan that works best for you. Support the Christbrand mission while unlocking powerful features to grow your ministry and business."
        />

        {/* Pricing Cards */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border-2 ${plan.borderColor} overflow-hidden shadow-sm transition-all hover:shadow-xl ${plan.popular ? "scale-[1.02] md:scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-[#D4AF37] to-[#E8CC6A] px-4 py-1.5 text-center text-xs font-bold uppercase tracking-widest text-[#2D1B4E]">
                    Most Popular
                  </div>
                )}

                <div className={`bg-gradient-to-br ${plan.gradient} p-6 ${plan.popular ? "text-[#FFFDF7]" : "text-[#2D1B4E]"}`}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${plan.popular ? "bg-[#D4AF37]/20" : "bg-[#4B2E83]/10"}`}>
                      <plan.icon className={`h-6 w-6 ${plan.popular ? "text-[#D4AF37]" : "text-[#4B2E83]"}`} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <div className="mb-2 flex items-baseline gap-1">
                    <span className="font-serif text-4xl font-bold">{plan.price}</span>
                    <span className={`text-sm ${plan.popular ? "text-[#B8A8D0]" : "text-[#6B5A8A]"}`}>/{plan.period}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${plan.popular ? "text-[#B8A8D0]" : "text-[#6B5A8A]"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="flex flex-1 flex-col bg-[#FFFFFF] p-6">
                  <ul className="mb-6 flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-[#2D1B4E]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/membership"
                    className={`block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${plan.ctaStyle}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Payment Methods */}
        <section className="bg-[#F5F0E8] py-12">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5">
              <Shield className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">Secure Payments</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[#2D1B4E]">Zimbabwe Payment Methods</h2>
            <p className="mx-auto mt-3 max-w-lg text-[#6B5A8A] leading-relaxed">
              We accept local Zimbabwean payment methods for your convenience. Pay in USD or ZiG.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="flex flex-col items-center rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#4B2E83] to-[#6B4EAA]">
                    <Smartphone className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2D1B4E]">{method.name}</h3>
                  <p className="mt-1 text-sm text-[#6B5A8A]">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-[#2D1B4E]">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                q: "Can I upgrade or downgrade my plan anytime?",
                a: "Yes, you can change your subscription plan at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                q: "Is the Free plan really free forever?",
                a: "Absolutely. The Free plan gives you basic access to the Christbrand platform with no hidden charges or time limits.",
              },
              {
                q: "How do I pay with EcoCash or Paynow?",
                a: "After selecting your plan, you will be redirected to our secure payment portal where you can choose EcoCash, Paynow, or ZiG as your payment method.",
              },
              {
                q: "Can I pay in ZiG currency?",
                a: "Yes, we accept Zimbabwe Gold (ZiG) payments. The equivalent amount will be calculated at the current exchange rate.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-[#2D1B4E]">{faq.q}</h3>
                <p className="mt-2 text-sm text-[#6B5A8A] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#4B2E83] via-[#3A2268] to-[#2D1B4E] py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#FFFDF7] md:text-4xl text-balance">
              Ready to Join the Body of Christ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[#B8A8D0] leading-relaxed">
              Start your journey with Christbrand today. Connect, grow, and serve alongside fellow believers in Zimbabwe.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/membership"
                className="rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E8CC6A] px-8 py-3.5 text-sm font-bold text-[#2D1B4E] shadow-lg transition-all hover:brightness-110"
              >
                Register Now
              </Link>
              <Link
                href="/"
                className="rounded-xl border border-[#D4AF37]/40 px-8 py-3.5 text-sm font-bold text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
