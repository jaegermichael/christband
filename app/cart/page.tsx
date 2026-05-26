import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { CreditCard, ShoppingCart } from "lucide-react"

export default function CartPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          badge="Cart"
          title="Shopping Cart"
          description="Review your selected Christian books, gifts, and ministry resources before arranging payment."
        />

        <section className="mx-auto max-w-3xl px-4 py-12">
          <div className="rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#551839] to-[#7A2A5E]">
              <ShoppingCart className="h-8 w-8 text-[#D4AF37]" />
            </div>
            <h2 className="mt-5 font-serif text-2xl font-bold text-[#2F0B20]">Your item is ready for checkout</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#7A5A6D]">
              This prototype does not process payments yet. Continue to payment options to arrange Paynow, EcoCash, OneMoney, ZiG, bank transfer, or card payment.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/shop#payment-methods"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#551839] to-[#7A2A5E] px-6 py-3 text-sm font-semibold text-[#FFFDF7] transition-all hover:brightness-110"
              >
                <CreditCard className="h-4 w-4" />
                Payment Options
              </Link>
              <Link
                href="/shop"
                className="rounded-xl border border-[#E8E0D0] px-6 py-3 text-sm font-semibold text-[#551839] transition-all hover:bg-[#F5F0E8]"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
