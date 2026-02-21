import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Star, ShoppingCart, BookOpen, User } from "lucide-react"

const books = [
  { title: "Walking with God in Zimbabwe", author: "Pastor Emmanuel Chikwanda", category: "Devotional", price: "$12.00", priceZIG: "ZiG 45", rating: 4.9, description: "A heartfelt devotional exploring faith in the Zimbabwean context. 365 daily readings that connect Scripture to everyday life in our nation.", language: "English" },
  { title: "Munamato WeMoyo (Prayer of the Heart)", author: "Bishop Florence Mutasa", category: "Prayer", price: "$10.00", priceZIG: "ZiG 38", rating: 4.8, description: "A prayer guide written in Shona. Teaches the art of intimate prayer and intercession rooted in African Christian traditions.", language: "Shona" },
  { title: "Building the Church in Africa", author: "Apostle Grace Mlambo", category: "Leadership", price: "$18.00", priceZIG: "ZiG 68", rating: 4.7, description: "A comprehensive guide for church leaders on growing congregations, developing leaders, and managing ministry in the African context.", language: "English" },
  { title: "Youth on Fire: A Generation Rising", author: "Pastor David Moyo", category: "Youth", price: "$8.00", priceZIG: "ZiG 30", rating: 4.6, description: "Challenging young Zimbabweans to live boldly for Christ. Packed with testimonies, practical advice, and Scripture studies for the next generation.", language: "English" },
  { title: "Umthandazo weSizwe (Prayer for the Nation)", author: "Reverend Sarah Ncube", category: "Prayer", price: "$9.00", priceZIG: "ZiG 34", rating: 4.8, description: "Written in Ndebele, this book calls the Church to intercessory prayer for Zimbabwe. Includes 40 days of guided national prayer.", language: "Ndebele" },
  { title: "The Christian Entrepreneur", author: "Joseph Nyathi", category: "Business", price: "$15.00", priceZIG: "ZiG 55", rating: 4.5, description: "Practical business wisdom from a biblical perspective. Learn how to start and grow a business while honouring God in the marketplace.", language: "English" },
  { title: "Marriage God's Way", author: "Pastor & Mrs Chikwanda", category: "Marriage", price: "$14.00", priceZIG: "ZiG 52", rating: 4.9, description: "Biblical principles for a thriving marriage in modern Zimbabwe. Addressing cultural and spiritual dynamics unique to African couples.", language: "English" },
  { title: "Healing the Land", author: "Dr. Tafadzwa Mhaka", category: "Healing", price: "$11.00", priceZIG: "ZiG 42", rating: 4.7, description: "A theological exploration of reconciliation, healing, and hope for Zimbabwe. Drawing from 2 Chronicles 7:14.", language: "English" },
]

const bookCategories = ["All", "Devotional", "Prayer", "Leadership", "Youth", "Business", "Marriage", "Healing"]

export default function BooksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          badge="Books"
          title="Christian Books"
          description="Discover books by Zimbabwean authors and international Christian writers. Available in English, Shona, and Ndebele."
        />

        <section className="mx-auto max-w-7xl px-4 py-12">
          {/* Category filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {bookCategories.map((cat) => (
              <button key={cat} className="rounded-full border border-[#E8E0D0] bg-[#FFFFFF] px-4 py-2 text-sm text-[#2D1B4E] transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 first:bg-[#4B2E83] first:text-[#FFFDF7] first:border-[#4B2E83]">
                {cat}
              </button>
            ))}
          </div>

          {/* Books grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <div key={book.title} className="group rounded-2xl border border-[#E8E0D0] bg-[#FFFFFF] shadow-sm transition-all hover:shadow-lg hover:border-[#D4AF37]/50 overflow-hidden">
                {/* Book cover placeholder */}
                <div className="flex h-52 flex-col items-center justify-center bg-gradient-to-br from-[#4B2E83] to-[#3A2268] p-4 text-center">
                  <BookOpen className="mb-2 h-10 w-10 text-[#D4AF37]" />
                  <span className="font-serif text-sm font-bold text-[#FFFDF7] leading-tight">{book.title}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#4B2E83]/10 px-2.5 py-0.5 text-[10px] font-medium uppercase text-[#4B2E83]">{book.category}</span>
                    <span className="rounded-full bg-[#F5F0E8] px-2.5 py-0.5 text-[10px] font-medium text-[#6B5A8A]">{book.language}</span>
                  </div>
                  <h3 className="mt-2 font-serif font-bold text-[#2D1B4E] leading-snug">{book.title}</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-[#6B5A8A]">
                    <User className="h-3 w-3 text-[#D4AF37]" />
                    {book.author}
                  </div>
                  <p className="mt-2 text-xs text-[#6B5A8A] leading-relaxed line-clamp-3">{book.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <span className="font-serif text-lg font-bold text-[#4B2E83]">{book.price}</span>
                      <span className="ml-2 text-xs text-[#6B5A8A]">{book.priceZIG}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#D4AF37]">
                      <Star className="h-3.5 w-3.5 fill-[#D4AF37]" />
                      {book.rating}
                    </div>
                  </div>
                  <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4B2E83] to-[#6B4EAA] py-2.5 text-sm font-medium text-[#FFFDF7] transition-all hover:brightness-110">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
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
