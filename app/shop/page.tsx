import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ShoppingCart, Star, Tag } from "lucide-react"

const products = [
  { name: "Christbrand Cross Necklace", category: "Jewellery", price: "$12.00", priceZIG: "ZiG 45", rating: 4.9, description: "Elegant gold-plated cross pendant on a fine chain. A beautiful symbol of faith.", image: "cross-necklace" },
  { name: "Faith Over Fear T-Shirt", category: "Apparel", price: "$15.00", priceZIG: "ZiG 55", rating: 4.7, description: "Premium cotton t-shirt with 'Faith Over Fear' design. Available in all sizes.", image: "faith-shirt" },
  { name: "Shona/Ndebele Study Bible", category: "Bibles", price: "$25.00", priceZIG: "ZiG 95", rating: 5.0, description: "Complete study Bible with commentary in Shona and Ndebele. Leather-bound edition.", image: "study-bible" },
  { name: "Prayer Journal — Daily Walk", category: "Stationery", price: "$8.00", priceZIG: "ZiG 30", rating: 4.8, description: "Guided prayer journal with 365 daily prompts. Gold-embossed cover.", image: "prayer-journal" },
  { name: "Worship Hymnal Collection", category: "Music", price: "$10.00", priceZIG: "ZiG 38", rating: 4.6, description: "USB drive with 200+ worship songs from Zimbabwean gospel artists.", image: "hymnal-usb" },
  { name: "Anointing Oil Gift Set", category: "Spiritual Items", price: "$18.00", priceZIG: "ZiG 68", rating: 4.8, description: "Premium olive oil gift set with frankincense and myrrh blends. 3 bottles included.", image: "anointing-oil" },
  { name: "Church Wall Calendar 2026", category: "Stationery", price: "$5.00", priceZIG: "ZiG 19", rating: 4.5, description: "Beautiful calendar featuring Zimbabwean church photography and daily scripture verses.", image: "church-calendar" },
  { name: "Christbrand Wristband Pack", category: "Accessories", price: "$3.00", priceZIG: "ZiG 11", rating: 4.7, description: "Pack of 5 silicone wristbands with faith-inspired messages. Purple and gold colours.", image: "wristband-pack" },
]

const shopCategories = ["All", "Jewellery", "Apparel", "Bibles", "Stationery", "Music", "Spiritual Items", "Accessories"]

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          badge="Shop"
          title="Christian Shop"
          description="Browse faith-inspired merchandise, Bibles, apparel, and gifts. Prices in USD and ZiG. Supporting local Christian artisans."
        />

        <section className="mx-auto max-w-7xl px-4 py-12">
          {/* Category filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {shopCategories.map((cat) => (
              <button key={cat} className="rounded-full border border-[#E8E0D0] bg-[#FFFFFF] px-4 py-2 text-sm text-[#2D1B4E] transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 first:bg-[#4B2E83] first:text-[#FFFDF7] first:border-[#4B2E83]">
                {cat}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div key={product.name} className="group rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] shadow-sm transition-all hover:shadow-lg hover:border-[#D4AF37]/50 overflow-hidden">
                {/* Product image placeholder */}
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#F5F0E8] to-[#E8E0D0]">
                  <ShoppingCart className="h-12 w-12 text-[#4B2E83]/20" />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-full bg-[#4B2E83]/10 px-2.5 py-0.5 text-[10px] font-medium uppercase text-[#4B2E83]">{product.category}</span>
                  <h3 className="mt-2 font-serif font-bold text-[#2D1B4E]">{product.name}</h3>
                  <p className="mt-1 text-xs text-[#6B5A8A] leading-relaxed">{product.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <span className="font-serif text-lg font-bold text-[#4B2E83]">{product.price}</span>
                      <span className="ml-2 text-xs text-[#6B5A8A]">{product.priceZIG}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#D4AF37]">
                      <Star className="h-3.5 w-3.5 fill-[#D4AF37]" />
                      {product.rating}
                    </div>
                  </div>
                  <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-[#4B2E83] to-[#6B4EAA] py-2.5 text-sm font-medium text-[#FFFDF7] transition-all hover:brightness-110">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Payment info */}
          <div className="mt-12 rounded-2xl border border-[#E8E0D0] bg-[#F5F0E8] p-6 text-center">
            <h3 className="font-serif text-lg font-bold text-[#2D1B4E]">Payment Methods</h3>
            <p className="mt-2 text-sm text-[#6B5A8A]">
              We accept Paynow, EcoCash, OneMoney, bank transfer, and ZiG. International orders can pay via Visa/Mastercard.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["Paynow", "EcoCash", "OneMoney", "ZiG", "Visa/Mastercard"].map((m) => (
                <span key={m} className="rounded-full border border-[#D4AF37]/30 bg-[#FFFFFF] px-4 py-1.5 text-xs font-medium text-[#4B2E83]">{m}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
