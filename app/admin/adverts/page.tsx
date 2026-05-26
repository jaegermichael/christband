"use client"

import { useState } from "react"
import { Search, Check, X, Eye, MoreHorizontal, Megaphone, Calendar, DollarSign } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type AdStatus = "pending" | "approved" | "rejected" | "expired"

interface Advert {
  id: string
  title: string
  business: string
  contact: string
  phone: string
  description: string
  duration: string
  amount: string
  paymentMethod: string
  dateSubmitted: string
  status: AdStatus
}

const initialAdverts: Advert[] = [
  { id: "1", title: "Grand Opening Sale - 20% Off", business: "Faith Print Solutions", contact: "Peter Chikwanha", phone: "+263 77 111 2222", description: "New branch now open in Eastgate Mall. 20% off all church printing orders this month.", duration: "30 days", amount: "$25 USD", paymentMethod: "EcoCash", dateSubmitted: "2026-04-10", status: "pending" },
  { id: "2", title: "Wedding Catering Special", business: "Shalom Catering Services", contact: "Grace Moyo", phone: "+263 71 222 3333", description: "Book your church wedding catering and receive a free dessert table. Serving Bulawayo.", duration: "14 days", amount: "$15 USD", paymentMethod: "Paynow", dateSubmitted: "2026-04-09", status: "pending" },
  { id: "3", title: "Holy Land Tour 2026", business: "Zion Travels & Tours", contact: "John Mapfumo", phone: "+263 78 333 4444", description: "Join our 10-day Holy Land pilgrimage in September. Walk where Jesus walked.", duration: "60 days", amount: "$50 USD", paymentMethod: "Bank Transfer", dateSubmitted: "2026-04-08", status: "approved" },
  { id: "4", title: "Church Management Software", business: "Grace IT Solutions", contact: "Tendai Zimunya", phone: "+263 77 444 5555", description: "Streamline your church operations with our all-in-one management platform.", duration: "30 days", amount: "$25 USD", paymentMethod: "ZiG", dateSubmitted: "2026-04-07", status: "approved" },
  { id: "5", title: "Christian Bookstore Sale", business: "Living Word Books", contact: "Ruth Sibanda", phone: "+263 73 555 6666", description: "50% off selected Bibles and devotionals. Visit our Harare CBD store.", duration: "7 days", amount: "$10 USD", paymentMethod: "EcoCash", dateSubmitted: "2026-04-06", status: "expired" },
  { id: "6", title: "Music Ministry Workshop", business: "Worship Academy Zim", contact: "Blessing Tawanda", phone: "+263 77 666 7777", description: "Learn to lead worship. 3-day intensive workshop for church musicians.", duration: "21 days", amount: "$20 USD", paymentMethod: "Paynow", dateSubmitted: "2026-04-12", status: "pending" },
  { id: "7", title: "Church Sound Systems", business: "ProSound Zimbabwe", contact: "David Musara", phone: "+263 71 777 8888", description: "Professional audio equipment for churches. Installation and training included.", duration: "30 days", amount: "$25 USD", paymentMethod: "Bank Transfer", dateSubmitted: "2026-04-11", status: "rejected" },
]

const statusColors: Record<AdStatus, string> = {
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  approved: "bg-emerald-100 text-emerald-800 border-emerald-200",
  rejected: "bg-red-100 text-red-800 border-red-200",
  expired: "bg-gray-100 text-gray-600 border-gray-200",
}

export default function AdminAdvertsPage() {
  const [adverts, setAdverts] = useState<Advert[]>(initialAdverts)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"all" | AdStatus>("all")
  const [selectedAd, setSelectedAd] = useState<Advert | null>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)

  const filteredAdverts = adverts.filter((a) => {
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.business.toLowerCase().includes(search.toLowerCase()) ||
      a.contact.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === "all" || a.status === filter
    return matchesSearch && matchesFilter
  })

  const updateStatus = (id: string, status: AdStatus) => {
    setAdverts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    )
  }

  const pendingCount = adverts.filter((a) => a.status === "pending").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#2F0B20]">
            Adverts Management
          </h1>
          <p className="text-sm text-[#7A5A6D]">
            Review and approve business advertisement submissions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-amber-300 bg-amber-50 text-amber-700">
            {pendingCount} Pending
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
          <TabsList className="bg-[#F5F0E8]">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#551839] data-[state=active]:text-white">
              All
            </TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-[#551839] data-[state=active]:text-white">
              Pending
            </TabsTrigger>
            <TabsTrigger value="approved" className="data-[state=active]:bg-[#551839] data-[state=active]:text-white">
              Active
            </TabsTrigger>
            <TabsTrigger value="expired" className="data-[state=active]:bg-[#551839] data-[state=active]:text-white">
              Expired
            </TabsTrigger>
            <TabsTrigger value="rejected" className="data-[state=active]:bg-[#551839] data-[state=active]:text-white">
              Rejected
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A5A6D]" />
          <Input
            placeholder="Search adverts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-[#E8E0D0] bg-white pl-9 focus-visible:ring-[#551839]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-[#E8E0D0] bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F5F0E8]/50 hover:bg-[#F5F0E8]/50">
              <TableHead className="font-semibold text-[#2F0B20]">Advert</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Business</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Duration</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Amount</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Payment</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Status</TableHead>
              <TableHead className="text-right font-semibold text-[#2F0B20]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAdverts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="py-12 text-center text-[#7A5A6D]">
                  No adverts found
                </TableCell>
              </TableRow>
            ) : (
              filteredAdverts.map((ad) => (
                <TableRow key={ad.id} className="hover:bg-[#F5F0E8]/30">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#C49B2F]">
                        <Megaphone className="h-5 w-5 text-[#2F0B20]" />
                      </div>
                      <div className="max-w-[200px]">
                        <p className="truncate font-medium text-[#2F0B20]">{ad.title}</p>
                        <p className="text-xs text-[#7A5A6D]">{ad.contact}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-[#7A5A6D]">{ad.business}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-[#7A5A6D]">
                      <Calendar className="h-3 w-3" />
                      {ad.duration}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 font-medium text-[#2F0B20]">
                      <DollarSign className="h-3 w-3 text-[#D4AF37]" />
                      {ad.amount}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-[#551839]/20 bg-[#551839]/5 text-[#551839]">
                      {ad.paymentMethod}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[ad.status]}>
                      {ad.status === "approved" ? "Active" : ad.status.charAt(0).toUpperCase() + ad.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      {ad.status === "pending" && (
                        <>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
                            onClick={() => updateStatus(ad.id, "approved")}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 hover:text-red-700"
                            onClick={() => updateStatus(ad.id, "rejected")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-[#7A5A6D]">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => {
                              setSelectedAd(ad)
                              setViewDialogOpen(true)
                            }}
                          >
                            <Eye className="mr-2 h-4 w-4" /> View Details
                          </DropdownMenuItem>
                          {ad.status !== "approved" && ad.status !== "expired" && (
                            <DropdownMenuItem onClick={() => updateStatus(ad.id, "approved")}>
                              <Check className="mr-2 h-4 w-4" /> Approve
                            </DropdownMenuItem>
                          )}
                          {ad.status !== "rejected" && ad.status !== "expired" && (
                            <DropdownMenuItem onClick={() => updateStatus(ad.id, "rejected")}>
                              <X className="mr-2 h-4 w-4" /> Reject
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* View Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="border-[#E8E0D0]">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl text-[#2F0B20]">Advert Details</DialogTitle>
            <DialogDescription className="text-[#7A5A6D]">
              Full information for this advertisement submission
            </DialogDescription>
          </DialogHeader>
          {selectedAd && (
            <div className="space-y-4">
              <div className="rounded-lg bg-gradient-to-r from-[#551839] to-[#7A2A5E] p-4">
                <h3 className="font-serif text-lg font-bold text-[#FFFDF7]">{selectedAd.title}</h3>
                <p className="mt-1 text-sm text-[#D4AF37]">{selectedAd.business}</p>
              </div>
              <div className="rounded-lg border border-[#E8E0D0] bg-[#F5F0E8]/50 p-3">
                <p className="text-sm text-[#2F0B20]">{selectedAd.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Contact Person</p>
                  <p className="font-medium text-[#2F0B20]">{selectedAd.contact}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Phone</p>
                  <p className="font-medium text-[#2F0B20]">{selectedAd.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Duration</p>
                  <p className="font-medium text-[#2F0B20]">{selectedAd.duration}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Amount</p>
                  <p className="font-medium text-[#D4AF37]">{selectedAd.amount}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Payment Method</p>
                  <p className="font-medium text-[#2F0B20]">{selectedAd.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Status</p>
                  <Badge className={statusColors[selectedAd.status]}>
                    {selectedAd.status === "approved" ? "Active" : selectedAd.status.charAt(0).toUpperCase() + selectedAd.status.slice(1)}
                  </Badge>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            {selectedAd?.status === "pending" && (
              <>
                <Button
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50"
                  onClick={() => {
                    updateStatus(selectedAd.id, "rejected")
                    setViewDialogOpen(false)
                  }}
                >
                  <X className="mr-2 h-4 w-4" /> Reject
                </Button>
                <Button
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                  onClick={() => {
                    updateStatus(selectedAd.id, "approved")
                    setViewDialogOpen(false)
                  }}
                >
                  <Check className="mr-2 h-4 w-4" /> Approve
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
