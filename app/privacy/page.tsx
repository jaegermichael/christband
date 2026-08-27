import Link from "next/link"
import { CheckCircle2, ShieldCheck } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

const personalInformation = ["Full name", "Email address", "Phone number", "WhatsApp number", "Username and password", "Profile picture", "Physical or postal address", "Location information", "Date of birth or age, where required", "Social media links", "Other information you voluntarily provide"]
const churchInformation = ["Church name", "Pastor or church leader’s name", "Church address", "Church location/map information", "Contact details", "Service times", "Denomination", "Church description", "Social media pages", "Church logo or photographs", "Sermons and other church-related content"]
const mediaContent = ["Sermons", "Videos", "Audio recordings", "Images", "Church announcements", "Gospel music", "Testimonials", "Comments", "Posts", "Christian articles", "Ministry information"]
const businessInformation = ["Business name", "Business description", "Contact information", "Business location", "Products or services", "Product images", "Prices", "Social media links", "Payment or transaction information where applicable"]
const useCases = ["Create and manage user accounts", "Register and display churches in the church directory", "Help users find churches and Christian organisations", "Connect Christians with churches and ministries", "Process and manage prayer requests", "Provide live and recorded sermons", "Publish user-submitted content", "Facilitate communication between users, churches, pastors, and organisations", "Provide Christian Store and business services", "Improve the functionality and user experience of ChristBand", "Communicate important service announcements", "Respond to questions, complaints, and support requests", "Detect and prevent fraud, abuse, spam, and unlawful activity", "Protect the security of our platform", "Comply with applicable legal and regulatory obligations"]
const sharingReasons = ["To provide ChristBand services", "With service providers that help operate the platform", "When users choose to make information public", "When users request communication with a church, pastor, organisation, or business", "To process transactions where applicable", "To protect the rights, safety, and security of ChristBand and its users", "Where required or permitted by applicable law", "With appropriate authorities where legally required"]
const securityRisks = ["Unauthorised access", "Loss", "Misuse", "Alteration", "Unauthorised disclosure", "Destruction"]
const retentionReasons = ["Provide requested services", "Maintain user accounts", "Maintain church and organisation directories", "Meet legal or regulatory requirements", "Resolve disputes", "Prevent fraud or abuse", "Enforce our agreements", "Maintain legitimate business records"]
const privacyRights = ["Request access to personal information held about them", "Request correction of inaccurate information", "Request deletion of certain information", "Withdraw consent where processing is based on consent", "Request restrictions on certain processing", "Object to certain uses of personal information", "Request information about how their data is being used"]

function PolicyList({ items }: { items: string[] }) {
  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
}

function PolicySection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`policy-${number}`}>
      <h2 id={`policy-${number}`}><span className="mr-2 text-sm font-sans tracking-[0.2em] text-secondary/70">{number}</span>{title}</h2>
      {children}
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader badge="Privacy · Effective 20 August 2026" title="Privacy Policy" description="How ChristBand handles information across its Christian community platform, directories, prayer services, media, store, and business features." />

        <section className="mx-auto max-w-5xl px-4 py-12 md:py-20">
          <div className="grid gap-6 border-b border-secondary/20 pb-10 md:grid-cols-[1fr_0.42fr] md:items-start">
            <div>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">Welcome to ChristBand, a Christian community platform designed to bring Christians, churches, pastors, gospel artists, Christian organisations, ministries, and Christian businesses together on one platform.</p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">This Privacy Policy explains how ChristBand collects, uses, stores, protects, and shares information when you use our website, applications, services, church directory, prayer request services, media services, Christian Store, and other features.</p>
            </div>
            <aside className="rounded-xl border border-secondary/30 bg-[#211132] p-5" aria-label="Policy summary">
              <ShieldCheck className="h-6 w-6 text-secondary" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold text-foreground">Privacy · Faith · Community · Connection</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Please read this policy before registering or submitting information.</p>
            </aside>
          </div>

          <article className="prose-policy mt-4">
            <p>By using ChristBand, you acknowledge that you have read and understood this Privacy Policy.</p>

            <PolicySection number="02" title="Information We Collect">
              <p>Depending on how you use ChristBand, we may collect the following information.</p>
              <h3>Personal information</h3><PolicyList items={personalInformation} />
              <h3>Church and pastor information</h3><p>Churches and pastors may voluntarily provide information for inclusion in the ChristBand directory, including:</p><PolicyList items={churchInformation} />
              <p>Information submitted for a public church directory may be visible to other ChristBand users and visitors.</p>
              <h3>Prayer requests</h3><p>ChristBand allows users to submit prayer requests. Users may have the option to choose whether a prayer request is private, accessible only to authorised persons or the intended recipient, or public, displayed or shared with the ChristBand community as indicated when submitted.</p><p>Users should avoid including highly sensitive personal information in public prayer requests.</p>
              <h3>Media and content</h3><p>We may collect and store content that users voluntarily upload or publish, including:</p><PolicyList items={mediaContent} /><p>Users are responsible for ensuring that they have the necessary rights and permissions to upload such content.</p>
              <h3>Business and Christian Store information</h3><p>Businesses, organisations, and sellers using the Christian Store or business-related features may provide:</p><PolicyList items={businessInformation} />
            </PolicySection>

            <PolicySection number="03" title="How We Use Your Information"><p>ChristBand may use collected information to:</p><PolicyList items={useCases} /></PolicySection>

            <PolicySection number="04" title="Public Information"><p>Some information submitted to ChristBand is intended to be publicly available. For example, information contained in a church directory profile may be visible to users and visitors.</p><p>Before submitting information, users should consider whether they are comfortable with that information being publicly accessible.</p><p>ChristBand does not intentionally publish information marked as private, except where disclosure is necessary to provide the requested service, comply with the law, protect users, or address security or safety concerns.</p></PolicySection>

            <PolicySection number="05" title="Prayer Requests"><p>Prayer requests require special care. Where ChristBand provides a private prayer-request option, we will take reasonable steps to restrict access to authorised users or recipients. However, users should understand that no internet-based system can guarantee absolute security.</p><p>If you choose to make a prayer request public, you understand that other users may be able to view, share, or otherwise interact with that request.</p><p>We strongly recommend that users do not include passwords, financial information, identity-document numbers, or other unnecessary sensitive information in prayer requests.</p></PolicySection>

            <PolicySection number="06" title="User-Generated Content"><p>ChristBand allows users to submit content. By uploading or publishing content, you confirm that:</p><PolicyList items={["You have the right to submit the content.", "The content does not knowingly violate another person’s rights.", "You have obtained necessary permission for photographs, recordings, sermons, music, or other third-party material.", "The content does not contain unlawful or harmful material."]} /><p>ChristBand may remove content that violates our terms, applicable law, or the safety of our community.</p></PolicySection>

            <PolicySection number="07" title="Location Information"><p>ChristBand may use location information to help users locate churches, Christian organisations, businesses, and other services. Location information may be provided directly by users or generated through mapping or location services.</p><p>Users should only submit locations that they are authorised to publish.</p></PolicySection>

            <PolicySection number="08" title="Cookies and Similar Technologies"><p>ChristBand may use cookies and similar technologies to:</p><PolicyList items={["Keep users logged in", "Remember preferences", "Improve website performance", "Understand how users interact with the platform", "Improve security", "Analyse platform usage"]} /><p>Users may be able to control cookies through their browser settings. Disabling certain cookies may affect some features of ChristBand.</p></PolicySection>

            <PolicySection number="09" title="Sharing of Information"><p>ChristBand does not intend to sell users’ personal information to third parties. Information may be shared where necessary:</p><PolicyList items={sharingReasons} /><p>Third-party service providers may only receive information reasonably necessary for the services they provide.</p></PolicySection>

            <PolicySection number="10" title="Third-Party Services and Links"><p>ChristBand may contain links to third-party websites, social media platforms, payment providers, mapping services, or other external services. ChristBand is not responsible for the privacy practices, security, or content of third-party websites.</p><p>Users should review the privacy policies of third-party services before providing them with personal information.</p></PolicySection>

            <PolicySection number="11" title="Data Security"><p>ChristBand will take reasonable technical and organisational measures to protect personal information against:</p><PolicyList items={securityRisks} /><p>However, no website, application, database, or internet transmission can be guaranteed to be completely secure. Users are responsible for keeping their passwords and account credentials confidential.</p></PolicySection>

            <PolicySection number="12" title="Data Retention"><p>ChristBand will retain personal information for as long as reasonably necessary to:</p><PolicyList items={retentionReasons} /><p>Where information is no longer required, ChristBand may delete or anonymise it, subject to applicable legal requirements.</p></PolicySection>

            <PolicySection number="13" title="Children’s Privacy"><p>ChristBand is intended to be used by individuals who are legally permitted to use online services in their jurisdiction. We do not knowingly collect personal information from children where such collection is prohibited by applicable law.</p><p>If a parent or guardian believes that a child has provided personal information without appropriate consent, they may contact ChristBand so that the information can be reviewed and, where appropriate, removed.</p></PolicySection>

            <PolicySection number="14" title="Your Privacy Rights"><p>Depending on applicable law, users may have rights concerning their personal information, including the right to:</p><PolicyList items={privacyRights} /><p>Some requests may be subject to legal or operational limitations. To exercise a privacy right, contact ChristBand using the contact details provided on the platform.</p></PolicySection>

            <PolicySection number="15" title="Church and Organisation Administrators"><p>Churches, ministries, and organisations are responsible for ensuring that information they submit about pastors, leaders, staff, members, or other individuals is submitted lawfully and with appropriate permission where required.</p><p>Administrators should not publish another person’s private information without authorisation.</p></PolicySection>

            <PolicySection number="16" title="Business and Seller Responsibility"><p>Businesses and sellers using ChristBand are responsible for handling customer information lawfully. Sellers must not misuse personal information obtained through ChristBand for spam, harassment, fraud, or unauthorised marketing.</p></PolicySection>

            <PolicySection number="17" title="Changes to Information"><p>Users may be able to update certain account information through their ChristBand account. If information cannot be changed through the platform, users may contact ChristBand for assistance.</p></PolicySection>

            <PolicySection number="18" title="Changes to This Privacy Policy"><p>ChristBand may update this Privacy Policy from time to time to reflect changes to the platform, technology, legal requirements, services, or privacy and security practices. When significant changes are made, ChristBand may provide an appropriate notice through the platform.</p><p>The updated policy will include a revised effective date.</p></PolicySection>

            <PolicySection number="19" title="Complaints and Privacy Concerns"><p>If you believe that ChristBand has mishandled your personal information or you have a privacy concern, please contact us. We will review privacy complaints and take reasonable steps to investigate and respond.</p></PolicySection>

            <PolicySection number="20" title="Contact Us"><p>For privacy questions, requests, complaints, or concerns, please contact ChristBand through the channels currently published on the launch flyer and platform:</p><div className="mt-5 grid gap-3 sm:grid-cols-2"><a href="https://wa.me/263780396185" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-secondary/30 bg-[#211132] p-4 text-sm font-semibold text-foreground hover:border-secondary"><CheckCircle2 className="h-5 w-5 text-secondary" aria-hidden="true" />WhatsApp: +263 78 039 6185</a><a href="tel:+263242485604" className="flex items-center gap-3 rounded-lg border border-secondary/30 bg-[#211132] p-4 text-sm font-semibold text-foreground hover:border-secondary"><CheckCircle2 className="h-5 w-5 text-secondary" aria-hidden="true" />Phone: +263 24 2485604</a></div><p>The supplied policy contains placeholders for an official email address and website. Those details should be added here by ChristBand before launch.</p></PolicySection>

            <PolicySection number="21" title="Acceptance"><p>By registering for or using ChristBand, you acknowledge that you have had an opportunity to read this Privacy Policy and understand how your information may be collected and used.</p><p>If you do not agree with this Privacy Policy, you should discontinue use of ChristBand and contact us regarding your account or personal information.</p></PolicySection>
          </article>

          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-secondary/20 pt-8 text-sm text-muted-foreground">
            <Link href="/terms" className="font-semibold text-secondary hover:text-[#ffd16a]">Read the Terms of Service</Link>
            <span aria-hidden="true">·</span>
            <Link href="/contact" className="font-semibold text-secondary hover:text-[#ffd16a]">Contact ChristBand</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
