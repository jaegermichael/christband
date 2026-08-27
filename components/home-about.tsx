import Image from "next/image"
import { Cross, Heart, Globe, Users } from "lucide-react"

export function HomeAbout() {
  const values = [
    { icon: Cross, title: "Faith-centred", desc: "Built on the foundation of Jesus Christ and His word." },
    { icon: Heart, title: "Community first", desc: "Strengthening bonds between believers across Zimbabwe." },
    { icon: Globe, title: "Nationwide reach", desc: "Connecting congregations across all 10 provinces." },
    { icon: Users, title: "Kingdom focused", desc: "Advancing God’s purposes through unity and service." },
  ]

  return (
    <section className="border-y border-secondary/20 bg-[#211132] py-20 md:py-28" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">Why ChristBand</p>
          <h2 id="about-heading" className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] text-foreground md:text-5xl">A stronger church community starts with connection.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">ChristBand is a Christian networking platform for believers, churches, pastors, ministries, and Christian businesses across Zimbabwe. When the Body of Christ is connected, communities can move from isolated effort to shared purpose.</p>
          <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">From Harare to Bulawayo, Mutare to Masvingo, this is a place to find one another, share what is happening, and make room for faith to grow.</p>
        </div>
        <div>
          <div className="relative overflow-hidden rounded-xl border border-secondary/30 bg-[#160b25] p-2">
            <Image src={encodeURI("/images/Christian Group Prayer – African Faith, Unity & Spiritual Growth Inspiration.jpg")} alt="A Christian group gathered in prayer" width={800} height={400} className="h-72 w-full rounded-lg object-cover opacity-90 md:h-96" />
            <div className="pointer-events-none absolute inset-2 rounded-lg bg-gradient-to-t from-[#160b25]/80 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-7 max-w-xs font-serif text-2xl leading-tight text-foreground">United in the Spirit, ready to serve.</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {values.map(({ icon: Icon, title, desc }) => <div key={title} className="border-t border-secondary/30 pt-4"><Icon className="h-5 w-5 text-secondary" aria-hidden="true" /><h3 className="mt-3 text-sm font-semibold text-foreground">{title}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{desc}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
