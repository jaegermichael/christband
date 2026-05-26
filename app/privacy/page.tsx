import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          badge="Privacy"
          title="Privacy Policy"
          description="How Christbrand intends to handle member, church, business, and prayer request information."
        />

        <section className="mx-auto max-w-3xl px-4 py-12">
          <div className="space-y-5 rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-8 text-sm leading-relaxed text-[#7A5A6D] shadow-sm">
            <p>
              Christbrand collects only the information needed to help believers, churches, pastors, organisations, and Christian businesses connect across Zimbabwe.
            </p>
            <p>
              Contact details, membership submissions, prayer requests, directory listings, advert enquiries, and payment confirmations should be used only for platform operations, support, moderation, and communication requested by members.
            </p>
            <p>
              Sensitive submissions such as prayer requests should be reviewed carefully before publication, and private information should not be shared publicly without permission.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
