"use client"

import { useState } from "react"
import { Search, Check, X, Eye, MoreHorizontal, User, Phone, Mail } from "lucide-react"
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

type PastorStatus = "pending" | "approved" | "rejected"

interface Pastor {
  id: string
  name: string
  title: string
  church: string
  city: string
  phone: string
  email: string
  yearsInMinistry: number
  dateSubmitted: string
  status: PastorStatus
}

const initialPastors: Pastor[] = [
  { id: "1", name: "Rev. David Musara", title: "Senior Pastor", church: "Victory Faith Assembly", city: "Harare", phone: "+263 77 111 2222", email: "david.musara@gmail.com", yearsInMinistry: 15, dateSubmitted: "2026-04-10", status: "pending" },
  { id: "2", name: "Pastor James Nkomo", title: "Lead Pastor", church: "Grace Community Church", city: "Bulawayo", phone: "+263 71 222 3333", email: "james.nkomo@yahoo.com", yearsInMinistry: 12, dateSubmitted: "2026-04-09", status: "pending" },
  { id: "3", name: "Apostle T. Makandiwa", title: "Founding Apostle", church: "Zion Temple Ministries", city: "Chitungwiza", phone: "+263 78 333 4444", email: "apostle.t@outlook.com", yearsInMinistry: 20, dateSubmitted: "2026-04-08", status: "approved" },
  { id: "4", name: "Rev. Sarah Chikwanda", title: "Senior Pastor", church: "Living Waters Chapel", city: "Mutare", phone: "+263 77 444 5555", email: "sarah.c@gmail.com", yearsInMinistry: 8, dateSubmitted: "2026-04-07", status: "approved" },
  { id: "5", name: "Bishop C. Rupapa", title: "Bishop", church: "Harvest International", city: "Masvingo", phone: "+263 73 555 6666", email: "bishop.rupapa@gmail.com", yearsInMinistry: 25, dateSubmitted: "2026-04-06", status: "approved" },
  { id: "6", name: "Prophet E. Mawarire", title: "Prophet", church: "New Life Tabernacle", city: "Harare", phone: "+263 77 666 7777", email: "prophet.e@gmail.com", yearsInMinistry: 10, dateSubmitted: "2026-04-12", status: "pending" },
  { id: "7", name: "Pastor Mercy Dube", title: "Co-Pastor", church: "Faith Family Church", city: "Kwekwe", phone: "+263 71 777 8888", email: "mercy.dube@gmail.com", yearsInMinistry: 6, dateSubmitted: "2026-04-11", status: "rejected" },
]

const statusColors: Record<PastorStatus, string> = {
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  approved: "bg-emerald-100 text-emerald-800 border-emerald-200",
  rejected: "bg-red-100 text-red-800 border-red-200",
}

export default function AdminPastorsPage() {
  const [pastors, setPastors] = useState<Pastor[]>(initialPastors)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"all" | PastorStatus>("all")
  const [selectedPastor, setSelectedPastor] = useState<Pastor | null>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)

  const filteredPastors = pastors.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.church.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === "all" || p.status === filter
    return matchesSearch && matchesFilter
  })

  const updateStatus = (id: string, status: PastorStatus) => {
    setPastors((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    )
  }

  const pendingCount = pastors.filter((p) => p.status === "pending").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#2F0B20]">
            Pastors Management
          </h1>
          <p className="text-sm text-[#7A5A6D]">
            Review and approve pastor directory submissions
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
              Approved
            </TabsTrigger>
            <TabsTrigger value="rejected" className="data-[state=active]:bg-[#551839] data-[state=active]:text-white">
              Rejected
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A5A6D]" />
          <Input
            placeholder="Search pastors..."
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
              <TableHead className="font-semibold text-[#2F0B20]">Pastor</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Church</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">City</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Experience</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Date</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Status</TableHead>
              <TableHead className="text-right font-semibold text-[#2F0B20]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPastors.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="py-12 text-center text-[#7A5A6D]">
                  No pastors found
                </TableCell>
              </TableRow>
            ) : (
              filteredPastors.map((pastor) => (
                <TableRow key={pastor.id} className="hover:bg-[#F5F0E8]/30">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#551839] to-[#7A2A5E]">
                        <User className="h-5 w-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#2F0B20]">{pastor.name}</p>
                        <p className="text-xs text-[#7A5A6D]">{pastor.title}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-[#7A5A6D]">{pastor.church}</TableCell>
                  <TableCell className="text-[#7A5A6D]">{pastor.city}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-[#551839]/20 bg-[#551839]/5 text-[#551839]">
                      {pastor.yearsInMinistry} years
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[#7A5A6D]">{pastor.dateSubmitted}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[pastor.status]}>
                      {pastor.status.charAt(0).toUpperCase() + pastor.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      {pastor.status === "pending" && (
                        <>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
                            onClick={() => updateStatus(pastor.id, "approved")}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 hover:text-red-700"
                            onClick={() => updateStatus(pastor.id, "rejected")}
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
                              setSelectedPastor(pastor)
                              setViewDialogOpen(true)
                            }}
                          >
                            <Eye className="mr-2 h-4 w-4" /> View Details
                          </DropdownMenuItem>
                          {pastor.status !== "approved" && (
                            <DropdownMenuItem onClick={() => updateStatus(pastor.id, "approved")}>
                              <Check className="mr-2 h-4 w-4" /> Approve
                            </DropdownMenuItem>
                          )}
                          {pastor.status !== "rejected" && (
                            <DropdownMenuItem onClick={() => updateStatus(pastor.id, "rejected")}>
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
            <DialogTitle className="font-serif text-xl text-[#2F0B20]">Pastor Details</DialogTitle>
            <DialogDescription className="text-[#7A5A6D]">
              Full information for this pastor submission
            </DialogDescription>
          </DialogHeader>
          {selectedPastor && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#551839] to-[#7A2A5E]">
                  <User className="h-8 w-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2F0B20]">{selectedPastor.name}</h3>
                  <p className="text-sm text-[#7A5A6D]">{selectedPastor.title}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Church</p>
                  <p className="font-medium text-[#2F0B20]">{selectedPastor.church}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">City</p>
                  <p className="font-medium text-[#2F0B20]">{selectedPastor.city}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Phone</p>
                  <p className="flex items-center gap-1 font-medium text-[#2F0B20]">
                    <Phone className="h-3 w-3" /> {selectedPastor.phone}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Email</p>
                  <p className="flex items-center gap-1 font-medium text-[#2F0B20]">
                    <Mail className="h-3 w-3" /> {selectedPastor.email}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Years in Ministry</p>
                  <p className="font-medium text-[#2F0B20]">{selectedPastor.yearsInMinistry} years</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Status</p>
                  <Badge className={statusColors[selectedPastor.status]}>
                    {selectedPastor.status.charAt(0).toUpperCase() + selectedPastor.status.slice(1)}
                  </Badge>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            {selectedPastor?.status === "pending" && (
              <>
                <Button
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50"
                  onClick={() => {
                    updateStatus(selectedPastor.id, "rejected")
                    setViewDialogOpen(false)
                  }}
                >
                  <X className="mr-2 h-4 w-4" /> Reject
                </Button>
                <Button
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                  onClick={() => {
                    updateStatus(selectedPastor.id, "approved")
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
