import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          badge="Terms"
          title="Terms of Service"
          description="Basic community expectations for using the Christbrand platform."
        />

        <section className="mx-auto max-w-3xl px-4 py-12">
          <div className="space-y-5 rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-8 text-sm leading-relaxed text-[#7A5A6D] shadow-sm">
            <p>
              Christbrand is designed for respectful Christian networking, directory discovery, prayer support, events, resources, adverts, and membership management.
            </p>
            <p>
              Members should submit truthful information, respect other users, avoid abusive or misleading content, and use adverts or listings only for lawful, faith-aligned purposes.
            </p>
            <p>
              Admins may review, approve, reject, edit, or remove submissions that are incomplete, inappropriate, misleading, or outside the platform mission.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
