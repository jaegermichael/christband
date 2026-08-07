import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Star, ShoppingCart, BookOpen, User } from "lucide-react"
import Link from "next/link"

const books = [
  { title: "Walking with God in Zimbabwe", author: "Pastor Emmanuel Chikwanda", category: "Devotional", price: "$12.00", priceZIG: "ZiG 45", rating: 4.9, description: "A heartfelt devotional exploring faith in the Zimbabwean context. 365 daily readings that connect Scripture to everyday life in our nation.", language: "English", image: "Imagenes AI religiosas gratis.jpg" },
  { title: "Munamato WeMoyo (Prayer of the Heart)", author: "Bishop Florence Mutasa", category: "Prayer", price: "$10.00", priceZIG: "ZiG 38", rating: 4.8, description: "A prayer guide written in Shona. Teaches the art of intimate prayer and intercession rooted in African Christian traditions.", language: "Shona", image: "Imagenes AI religiosas gratis (1).jpg" },
  { title: "Building the Church in Africa", author: "Apostle Grace Mlambo", category: "Leadership", price: "$18.00", priceZIG: "ZiG 68", rating: 4.7, description: "A comprehensive guide for church leaders on growing congregations, developing leaders, and managing ministry in the African context.", language: "English", image: "10.jpg" },
  { title: "Youth on Fire: A Generation Rising", author: "Pastor David Moyo", category: "Youth", price: "$8.00", priceZIG: "ZiG 30", rating: 4.6, description: "Challenging young Zimbabweans to live boldly for Christ. Packed with testimonies, practical advice, and Scripture studies for the next generation.", language: "English", image: "Jesus Banner.jpg" },
  { title: "Umthandazo weSizwe (Prayer for the Nation)", author: "Reverend Sarah Ncube", category: "Prayer", price: "$9.00", priceZIG: "ZiG 34", rating: 4.8, description: "Written in Ndebele, this book calls the Church to intercessory prayer for Zimbabwe. Includes 40 days of guided national prayer.", language: "Ndebele", image: "Christian Group Prayer – African Faith, Unity & Spiritual Growth Inspiration.jpg" },
  { title: "The Christian Entrepreneur", author: "Joseph Nyathi", category: "Business", price: "$15.00", priceZIG: "ZiG 55", rating: 4.5, description: "Practical business wisdom from a biblical perspective. Learn how to start and grow a business while honouring God in the marketplace.", language: "English", image: "download.jpg" },
  { title: "Marriage God's Way", author: "Pastor & Mrs Chikwanda", category: "Marriage", price: "$14.00", priceZIG: "ZiG 52", rating: 4.9, description: "Biblical principles for a thriving marriage in modern Zimbabwe. Addressing cultural and spiritual dynamics unique to African couples.", language: "English", image: "St Francis Church ⛪  Sri Lanka.jpg" },
  { title: "Healing the Land", author: "Dr. Tafadzwa Mhaka", category: "Healing", price: "$11.00", priceZIG: "ZiG 42", rating: 4.7, description: "A theological exploration of reconciliation, healing, and hope for Zimbabwe. Drawing from 2 Chronicles 7:14.", language: "English", image: "Welcome background.jpg" },
]

const bookCategories = ["All", "Devotional", "Prayer", "Leadership", "Youth", "Business", "Marriage", "Healing"]

export default function BooksPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge="Books"
          title="Christian Books"
          description="Discover books by Zimbabwean authors and international Christian writers. Available in English, Shona, and Ndebele."
        />

        <section className="mx-auto max-w-7xl px-4 py-12">
          {/* Category filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {bookCategories.map((cat) => (
              <button key={cat} className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-foreground transition-all hover:border-secondary hover:bg-secondary/10 first:bg-primary first:text-primary-foreground first:border-primary">
                {cat}
              </button>
            ))}
          </div>

          {/* Books grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <div key={book.title} className="group overflow-hidden rounded-2xl border border-border bg-card/50 shadow-brand-sm transition-all hover:shadow-brand-lg hover:border-secondary/50">
                {/* Book cover image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={encodeURI(`/images/${book.image}`)}
                    alt={book.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="font-serif text-sm font-bold text-primary-foreground leading-tight line-clamp-2">{book.title}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-[10px] font-medium uppercase text-secondary">{book.category}</span>
                    <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">{book.language}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <User className="h-3 w-3 text-secondary" />
                    {book.author}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">{book.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <span className="font-serif text-lg font-bold text-primary">{book.price}</span>
                      <span className="ml-2 text-xs text-muted-foreground">{book.priceZIG}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-secondary">
                      <Star className="h-3.5 w-3.5 fill-secondary" />
                      {book.rating}
                    </div>
                  </div>
                  <Link href={`/cart?item=${encodeURIComponent(book.title)}`} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Link>
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