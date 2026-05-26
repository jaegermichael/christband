"use client"

import { useState } from "react"
import { Search, Check, X, Eye, MoreHorizontal, CreditCard, Receipt, Calendar } from "lucide-react"
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

type PaymentStatus = "pending" | "confirmed" | "rejected" | "refunded"
type PaymentType = "subscription" | "advert" | "shop"

interface Payment {
  id: string
  reference: string
  payer: string
  email: string
  phone: string
  type: PaymentType
  description: string
  amount: string
  currency: string
  method: string
  transactionId: string
  dateSubmitted: string
  status: PaymentStatus
}

const initialPayments: Payment[] = [
  { id: "1", reference: "PAY-2026-001", payer: "Tendai Moyo", email: "tendai@gmail.com", phone: "+263 77 123 4567", type: "subscription", description: "Premium Membership - Annual", amount: "15", currency: "USD", method: "EcoCash", transactionId: "EC789456123", dateSubmitted: "2026-04-10", status: "pending" },
  { id: "2", reference: "PAY-2026-002", payer: "Faith Print Solutions", email: "info@faithprint.co.zw", phone: "+263 77 111 2222", type: "advert", description: "Featured Ad - 30 days", amount: "25", currency: "USD", method: "Paynow", transactionId: "PN456789012", dateSubmitted: "2026-04-10", status: "pending" },
  { id: "3", reference: "PAY-2026-003", payer: "Grace Ndlovu", email: "grace.ndlovu@yahoo.com", phone: "+263 71 234 5678", type: "shop", description: "Bible + Devotional Book", amount: "45", currency: "USD", method: "ZiG", transactionId: "ZIG123456789", dateSubmitted: "2026-04-09", status: "confirmed" },
  { id: "4", reference: "PAY-2026-004", payer: "Peter Chikwanha", email: "peter.c@outlook.com", phone: "+263 78 345 6789", type: "subscription", description: "Basic Membership - Monthly", amount: "5", currency: "USD", method: "EcoCash", transactionId: "EC321654987", dateSubmitted: "2026-04-08", status: "confirmed" },
  { id: "5", reference: "PAY-2026-005", payer: "Shalom Catering", email: "shalom@gmail.com", phone: "+263 71 222 3333", type: "advert", description: "Standard Ad - 14 days", amount: "15", currency: "USD", method: "Bank Transfer", transactionId: "BT987654321", dateSubmitted: "2026-04-07", status: "confirmed" },
  { id: "6", reference: "PAY-2026-006", payer: "John Mapfumo", email: "john.mapfumo@gmail.com", phone: "+263 73 567 8901", type: "subscription", description: "Premium Membership - Annual", amount: "15", currency: "USD", method: "Paynow", transactionId: "PN159753456", dateSubmitted: "2026-04-06", status: "rejected" },
  { id: "7", reference: "PAY-2026-007", payer: "Ruth Sibanda", email: "ruth.sibanda@gmail.com", phone: "+263 77 456 7890", type: "shop", description: "Christian Music CD Bundle", amount: "30", currency: "USD", method: "EcoCash", transactionId: "EC753159852", dateSubmitted: "2026-04-12", status: "pending" },
  { id: "8", reference: "PAY-2026-008", payer: "Zion Travels", email: "info@ziontravel.co.zw", phone: "+263 78 333 4444", type: "advert", description: "Premium Ad - 60 days", amount: "50", currency: "USD", method: "Bank Transfer", transactionId: "BT456123789", dateSubmitted: "2026-04-11", status: "pending" },
]

const statusColors: Record<PaymentStatus, string> = {
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  confirmed: "bg-emerald-100 text-emerald-800 border-emerald-200",
  rejected: "bg-red-100 text-red-800 border-red-200",
  refunded: "bg-blue-100 text-blue-800 border-blue-200",
}

const typeColors: Record<PaymentType, string> = {
  subscription: "bg-purple-100 text-purple-800 border-purple-200",
  advert: "bg-[#D4AF37]/20 text-[#8B6914] border-[#D4AF37]/30",
  shop: "bg-sky-100 text-sky-800 border-sky-200",
}

const typeLabels: Record<PaymentType, string> = {
  subscription: "Subscription",
  advert: "Advert",
  shop: "Shop",
}

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>(initialPayments)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"all" | PaymentStatus>("all")
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)

  const filteredPayments = payments.filter((p) => {
    const matchesSearch =
      p.reference.toLowerCase().includes(search.toLowerCase()) ||
      p.payer.toLowerCase().includes(search.toLowerCase()) ||
      p.transactionId.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === "all" || p.status === filter
    return matchesSearch && matchesFilter
  })

  const updateStatus = (id: string, status: PaymentStatus) => {
    setPayments((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    )
  }

  const pendingCount = payments.filter((p) => p.status === "pending").length
  const totalPending = payments
    .filter((p) => p.status === "pending")
    .reduce((sum, p) => sum + parseFloat(p.amount), 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#2F0B20]">
            Payments Management
          </h1>
          <p className="text-sm text-[#7A5A6D]">
            Confirm payments and manage transactions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="border-amber-300 bg-amber-50 text-amber-700">
            {pendingCount} Pending
          </Badge>
          <Badge variant="outline" className="border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#8B6914]">
            ${totalPending.toFixed(2)} to confirm
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
            <TabsTrigger value="confirmed" className="data-[state=active]:bg-[#551839] data-[state=active]:text-white">
              Confirmed
            </TabsTrigger>
            <TabsTrigger value="rejected" className="data-[state=active]:bg-[#551839] data-[state=active]:text-white">
              Rejected
            </TabsTrigger>
            <TabsTrigger value="refunded" className="data-[state=active]:bg-[#551839] data-[state=active]:text-white">
              Refunded
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A5A6D]" />
          <Input
            placeholder="Search payments..."
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
              <TableHead className="font-semibold text-[#2F0B20]">Reference</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Payer</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Type</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Amount</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Method</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Date</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Status</TableHead>
              <TableHead className="text-right font-semibold text-[#2F0B20]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPayments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="py-12 text-center text-[#7A5A6D]">
                  No payments found
                </TableCell>
              </TableRow>
            ) : (
              filteredPayments.map((payment) => (
                <TableRow key={payment.id} className="hover:bg-[#F5F0E8]/30">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#551839]/10">
                        <Receipt className="h-4 w-4 text-[#551839]" />
                      </div>
                      <span className="font-mono text-sm font-medium text-[#2F0B20]">{payment.reference}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-[#2F0B20]">{payment.payer}</p>
                      <p className="text-xs text-[#7A5A6D]">{payment.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={typeColors[payment.type]}>
                      {typeLabels[payment.type]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-semibold text-[#2F0B20]">${payment.amount}</span>
                    <span className="ml-1 text-xs text-[#7A5A6D]">{payment.currency}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-[#7A5A6D]">
                      <CreditCard className="h-3 w-3" />
                      {payment.method}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-[#7A5A6D]">
                      <Calendar className="h-3 w-3" />
                      {payment.dateSubmitted}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[payment.status]}>
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      {payment.status === "pending" && (
                        <>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
                            onClick={() => updateStatus(payment.id, "confirmed")}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 hover:text-red-700"
                            onClick={() => updateStatus(payment.id, "rejected")}
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
                              setSelectedPayment(payment)
                              setViewDialogOpen(true)
                            }}
                          >
                            <Eye className="mr-2 h-4 w-4" /> View Details
                          </DropdownMenuItem>
                          {payment.status === "pending" && (
                            <>
                              <DropdownMenuItem onClick={() => updateStatus(payment.id, "confirmed")}>
                                <Check className="mr-2 h-4 w-4" /> Confirm Payment
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => updateStatus(payment.id, "rejected")}>
                                <X className="mr-2 h-4 w-4" /> Reject
                              </DropdownMenuItem>
                            </>
                          )}
                          {payment.status === "confirmed" && (
                            <DropdownMenuItem onClick={() => updateStatus(payment.id, "refunded")}>
                              <CreditCard className="mr-2 h-4 w-4" /> Mark as Refunded
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
            <DialogTitle className="font-serif text-xl text-[#2F0B20]">Payment Details</DialogTitle>
            <DialogDescription className="text-[#7A5A6D]">
              Full transaction information
            </DialogDescription>
          </DialogHeader>
          {selectedPayment && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-[#551839] to-[#7A2A5E] p-4">
                <div>
                  <p className="text-xs text-[#D8B9CB]">Reference</p>
                  <p className="font-mono text-lg font-bold text-[#FFFDF7]">{selectedPayment.reference}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#D8B9CB]">Amount</p>
                  <p className="text-2xl font-bold text-[#D4AF37]">${selectedPayment.amount}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Payer</p>
                  <p className="font-medium text-[#2F0B20]">{selectedPayment.payer}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Email</p>
                  <p className="font-medium text-[#2F0B20]">{selectedPayment.email}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Phone</p>
                  <p className="font-medium text-[#2F0B20]">{selectedPayment.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Type</p>
                  <Badge className={typeColors[selectedPayment.type]}>
                    {typeLabels[selectedPayment.type]}
                  </Badge>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Description</p>
                  <p className="font-medium text-[#2F0B20]">{selectedPayment.description}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Payment Method</p>
                  <p className="font-medium text-[#2F0B20]">{selectedPayment.method}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Transaction ID</p>
                  <p className="font-mono text-sm font-medium text-[#2F0B20]">{selectedPayment.transactionId}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Date</p>
                  <p className="font-medium text-[#2F0B20]">{selectedPayment.dateSubmitted}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Status</p>
                  <Badge className={statusColors[selectedPayment.status]}>
                    {selectedPayment.status.charAt(0).toUpperCase() + selectedPayment.status.slice(1)}
                  </Badge>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            {selectedPayment?.status === "pending" && (
              <>
                <Button
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50"
                  onClick={() => {
                    updateStatus(selectedPayment.id, "rejected")
                    setViewDialogOpen(false)
                  }}
                >
                  <X className="mr-2 h-4 w-4" /> Reject
                </Button>
                <Button
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                  onClick={() => {
                    updateStatus(selectedPayment.id, "confirmed")
                    setViewDialogOpen(false)
                  }}
                >
                  <Check className="mr-2 h-4 w-4" /> Confirm Payment
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
