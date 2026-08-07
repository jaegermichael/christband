import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { BookOpen, Calendar, Share2, Heart } from "lucide-react"

const devotionals = [
  { title: "Walking in Faith Through the Storm", date: "February 21, 2026", scripture: "Psalm 46:1 — God is our refuge and strength, an ever-present help in trouble.", body: "In times of uncertainty, the people of God are called to stand firm. Zimbabwe has been through many storms — economic, social, and personal — but our faith remains our anchor. Today, remember that the same God who parted the Red Sea is with you. He has not forgotten you. Walk in confidence, for He goes before you.", author: "Pastor Emmanuel Chikwanda", category: "Faith", image: "Imagenes AI religiosas gratis.jpg" },
  { title: "The Power of Unity in Christ", date: "February 20, 2026", scripture: "Ephesians 4:3 — Make every effort to keep the unity of the Spirit through the bond of peace.", body: "As the Body of Christ in Zimbabwe, we are strongest when we stand together. Our denominations may differ, but our Lord is one. Let us commit today to building bridges, not walls. Reach out to a fellow believer from another church and share the love of Christ. Unity does not mean uniformity — it means love in diversity.", author: "Bishop Florence Mutasa", category: "Unity", image: "Christian Group Prayer – African Faith, Unity & Spiritual Growth Inspiration.jpg" },
  { title: "Purpose in Every Season", date: "February 19, 2026", scripture: "Ecclesiastes 3:1 — There is a time for everything, and a season for every activity under the heavens.", body: "Are you in a season of waiting? A season of planting? A season of harvest? Whatever season you find yourself in, know that God is at work. He wastes nothing. The challenges you face today are preparing you for the testimony of tomorrow. Embrace your season and trust the Master Gardener.", author: "Reverend Sarah Ncube", category: "Purpose", image: "10.jpg" },
  { title: "Generous Hearts, Blessed Communities", date: "February 18, 2026", scripture: "Proverbs 11:25 — A generous person will prosper; whoever refreshes others will be refreshed.", body: "In a land where many struggle, generosity becomes a radical act of faith. When we give — even from our little — we declare that God is our provider. Share a meal with your neighbour, mentor a young person, or support a local ministry. Your generosity will create ripples of blessing across Zimbabwe.", author: "Pastor Joseph Nyathi", category: "Generosity", image: "Imagenes AI religiosas gratis (1).jpg" },
  { title: "Raising Godly Children in Modern Zimbabwe", date: "February 17, 2026", scripture: "Proverbs 22:6 — Start children off on the way they should go, and even when they are old they will not turn from it.", body: "Our children face unique challenges in the digital age. As parents and church leaders, we must be intentional about discipleship at home. Create family devotion times, teach them the Word in their mother tongue, and model Christlike behaviour. The future of the Zimbabwean church depends on the seeds we plant in our children today.", author: "Apostle Grace Mlambo", category: "Family", image: "Jesus Banner.jpg" },
]

const categories = ["All", "Faith", "Unity", "Purpose", "Generosity", "Family", "Prayer", "Hope"]

export default function DevotionalsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge="Devotionals"
          title="Word of Motivation"
          description="Daily devotionals and uplifting messages from pastors across Zimbabwe. Be encouraged in your faith walk."
        />

        <section className="mx-auto max-w-7xl px-4 py-12">
          {/* Category filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-foreground transition-all hover:border-secondary hover:bg-secondary/10 first:bg-primary first:text-primary-foreground first:border-primary">
                {cat}
              </button>
            ))}
          </div>

          {/* Devotional cards */}
          <div className="flex flex-col gap-6">
            {devotionals.map((dev) => (
              <article key={dev.title} className="overflow-hidden rounded-2xl border border-border bg-card/50 shadow-brand-sm transition-all hover:shadow-brand-lg md:flex">
                <div className="relative h-48 w-full md:h-auto md:w-72 md:flex-shrink-0">
                  <Image
                    src={encodeURI(`/images/${dev.image}`)}
                    alt={dev.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 288px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent md:bg-gradient-to-r" />
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary/20 px-3 py-0.5 text-xs font-semibold uppercase text-secondary">{dev.category}</span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {dev.date}
                    </div>
                  </div>
                  <h2 className="mt-3 font-serif text-2xl font-bold text-foreground">{dev.title}</h2>
                  <blockquote className="mt-4 rounded-xl border-l-4 border-secondary bg-secondary/10 px-5 py-4 text-sm italic text-secondary leading-relaxed">
                    {dev.scripture}
                  </blockquote>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{dev.body}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                        <span className="text-xs font-bold text-primary-foreground">{dev.author[0]}</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">{dev.author}</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors hover:bg-primary hover:text-primary-foreground active:scale-[0.98]" aria-label="Like">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors hover:bg-primary hover:text-primary-foreground active:scale-[0.98]" aria-label="Share">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}