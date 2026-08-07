import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Globe, MapPin, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

const organisations = [
  { name: "Zimbabwe Council of Churches (ZCC)", category: "Ecumenical Body", location: "Harare", members: "30+ denominations", description: "The main ecumenical body uniting Protestant and Pentecostal churches across Zimbabwe for common witness and service.", profile: "/organisations?org=zcc", image: "Christian Group Prayer – African Faith, Unity & Spiritual Growth Inspiration.jpg" },
  { name: "Evangelical Fellowship of Zimbabwe (EFZ)", category: "Fellowship", location: "Harare", members: "200+ churches", description: "A fellowship promoting evangelical faith, biblical teaching, and church growth across all provinces.", profile: "/organisations?org=efz", image: "Imagenes AI religiosas gratis.jpg" },
  { name: "Zimbabwe Catholic Bishops Conference (ZCBC)", category: "Catholic Body", location: "Harare", members: "8 dioceses", description: "The governing body of the Catholic Church in Zimbabwe, coordinating pastoral and social programmes.", profile: "/organisations?org=zcbc", image: "St Francis Church ⛪  Sri Lanka.jpg" },
  { name: "Fambidzanai Trust", category: "Christian NGO", location: "Harare", members: "50+ partners", description: "A faith-based organisation promoting sustainable agriculture and community development in rural Zimbabwe.", profile: "/organisations?org=fambidzanai", image: "10.jpg" },
  { name: "Scripture Union Zimbabwe", category: "Youth Ministry", location: "Harare", members: "Schools nationwide", description: "Reaching young people in schools with the Gospel through Bible study groups and holiday camps.", profile: "/organisations?org=scripture-union", image: "Imagenes AI religiosas gratis (1).jpg" },
  { name: "Zimbabwe Christian Alliance (ZCA)", category: "Alliance", location: "Bulawayo", members: "100+ churches", description: "An inter-denominational alliance focused on social justice, peace-building, and national prayer initiatives.", profile: "/organisations?org=zca", image: "Jesus Banner.jpg" },
  { name: "Student Christian Organisation of Zimbabwe", category: "Student Ministry", location: "Harare", members: "15+ universities", description: "Empowering Christian students across universities and colleges to live out their faith on campus.", profile: "/organisations?org=scoz", image: "download.jpg" },
  { name: "Bible Society of Zimbabwe", category: "Bible Distribution", location: "Harare", members: "National", description: "Translating, printing, and distributing the Bible in Shona, Ndebele, English, and other local languages.", profile: "/organisations?org=bible-society", image: "download (1).jpg" },
]

const categories = ["All Categories", "Ecumenical Body", "Fellowship", "Catholic Body", "Christian NGO", "Youth Ministry", "Alliance", "Student Ministry", "Bible Distribution"]

export default function OrganisationsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge="Organisations"
          title="Church Organisations"
          description="Discover Christian organisations, ministries, and ecumenical bodies serving the church and communities across Zimbabwe."
        />

        <section className="mx-auto max-w-7xl px-4 py-12">
          {/* Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-foreground transition-all hover:border-secondary hover:bg-secondary/10 hover:text-secondary first:bg-primary first:text-primary-foreground first:border-primary"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Organisations grid */}
          <div className="grid gap-5 md:grid-cols-2">
            {organisations.map((org) => (
              <div key={org.name} className="group overflow-hidden rounded-2xl border border-border bg-card/50 shadow-brand-sm transition-all hover:shadow-brand-lg hover:border-secondary/50">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={encodeURI(`/images/${org.image}`)}
                    alt={org.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-primary-foreground">{org.name}</h3>
                      <span className="mt-1 inline-block rounded-full bg-primary-foreground/20 px-3 py-0.5 text-xs font-medium text-primary-foreground backdrop-blur-sm">{org.category}</span>
                    </div>
                    <Link href={org.profile} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary-foreground transition-colors hover:bg-secondary/80" aria-label={`View ${org.name}`}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{org.description}</p>
                  <div className="mt-4 flex flex-wrap gap-4 border-t border-border pt-4">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-secondary" />
                      {org.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Users className="h-3.5 w-3.5 text-secondary" />
                      {org.members}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-secondary">
                      <Globe className="h-3.5 w-3.5" />
                      View Profile
                    </div>
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