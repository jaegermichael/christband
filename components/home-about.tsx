import { Cross, Heart, Globe } from "lucide-react"

export function HomeAbout() {
  return (
    <section className="bg-[#F5F0E8] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-2 inline-block rounded-full bg-[#4B2E83]/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#4B2E83]">
              About Us
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2D1B4E] md:text-4xl text-balance">
              Uniting the Body of Christ in Zimbabwe
            </h2>
            <p className="mt-4 text-[#6B5A8A] leading-relaxed">
              Christbrand is Zimbabwe&apos;s premier Christian networking platform dedicated to connecting believers, churches, pastors, and Christian businesses across every province. We believe that when the Body of Christ is connected, communities are transformed and God&apos;s kingdom advances.
            </p>
            <p className="mt-3 text-[#6B5A8A] leading-relaxed">
              From Harare to Bulawayo, Mutare to Masvingo, we are building bridges between congregations, fostering fellowship, and creating opportunities for believers to grow together in faith and purpose.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Cross, title: "Faith-Centred", desc: "Built on the foundation of Jesus Christ and His word." },
              { icon: Heart, title: "Community First", desc: "Strengthening bonds between believers across Zimbabwe." },
              { icon: Globe, title: "Nationwide Reach", desc: "Connecting all 10 provinces of Zimbabwe." },
              { icon: Cross, title: "Kingdom Focused", desc: "Advancing God's purposes through unity and service." },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-5 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4B2E83] to-[#6B4EAA]">
                    <Icon className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif font-bold text-[#2D1B4E]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#6B5A8A] leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
