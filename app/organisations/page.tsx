import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Globe, MapPin, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

const organisations = [
  { name: "Zimbabwe Council of Churches (ZCC)", category: "Ecumenical Body", location: "Harare", members: "30+ denominations", description: "The main ecumenical body uniting Protestant and Pentecostal churches across Zimbabwe for common witness and service.", profile: "/organisations?org=zcc" },
  { name: "Evangelical Fellowship of Zimbabwe (EFZ)", category: "Fellowship", location: "Harare", members: "200+ churches", description: "A fellowship promoting evangelical faith, biblical teaching, and church growth across all provinces.", profile: "/organisations?org=efz" },
  { name: "Zimbabwe Catholic Bishops Conference (ZCBC)", category: "Catholic Body", location: "Harare", members: "8 dioceses", description: "The governing body of the Catholic Church in Zimbabwe, coordinating pastoral and social programmes.", profile: "/organisations?org=zcbc" },
  { name: "Fambidzanai Trust", category: "Christian NGO", location: "Harare", members: "50+ partners", description: "A faith-based organisation promoting sustainable agriculture and community development in rural Zimbabwe.", profile: "/organisations?org=fambidzanai" },
  { name: "Scripture Union Zimbabwe", category: "Youth Ministry", location: "Harare", members: "Schools nationwide", description: "Reaching young people in schools with the Gospel through Bible study groups and holiday camps.", profile: "/organisations?org=scripture-union" },
  { name: "Zimbabwe Christian Alliance (ZCA)", category: "Alliance", location: "Bulawayo", members: "100+ churches", description: "An inter-denominational alliance focused on social justice, peace-building, and national prayer initiatives.", profile: "/organisations?org=zca" },
  { name: "Student Christian Organisation of Zimbabwe", category: "Student Ministry", location: "Harare", members: "15+ universities", description: "Empowering Christian students across universities and colleges to live out their faith on campus.", profile: "/organisations?org=scoz" },
  { name: "Bible Society of Zimbabwe", category: "Bible Distribution", location: "Harare", members: "National", description: "Translating, printing, and distributing the Bible in Shona, Ndebele, English, and other local languages.", profile: "/organisations?org=bible-society" },
]

const categories = ["All Categories", "Ecumenical Body", "Fellowship", "Catholic Body", "Christian NGO", "Youth Ministry", "Alliance", "Student Ministry", "Bible Distribution"]

export default function OrganisationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
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
                className="rounded-full border border-[#E8E0D0] bg-[#FFFFFF] px-4 py-2 text-sm text-[#2F0B20] transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#551839] first:bg-[#551839] first:text-[#FFFDF7] first:border-[#551839]"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Organisations grid */}
          <div className="grid gap-5 md:grid-cols-2">
            {organisations.map((org) => (
              <div key={org.name} className="group rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-6 shadow-sm transition-all hover:shadow-lg hover:border-[#D4AF37]/50">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2F0B20]">{org.name}</h3>
                    <span className="mt-1 inline-block rounded-full bg-[#551839]/10 px-3 py-0.5 text-xs font-medium text-[#551839]">{org.category}</span>
                  </div>
                  <Link href={org.profile} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F0E8] text-[#551839] transition-colors hover:bg-[#551839] hover:text-[#D4AF37]" aria-label={`View ${org.name}`}>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
                <p className="mt-3 text-sm text-[#7A5A6D] leading-relaxed">{org.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 border-t border-[#F0EBE0] pt-4">
                  <div className="flex items-center gap-1.5 text-sm text-[#7A5A6D]">
                    <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                    {org.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-[#7A5A6D]">
                    <Users className="h-3.5 w-3.5 text-[#D4AF37]" />
                    {org.members}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-[#7A5A6D]">
                    <Globe className="h-3.5 w-3.5 text-[#D4AF37]" />
                    View Profile
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
