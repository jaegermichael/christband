"use client"

import { useState } from "react"
import { Search, Check, X, Eye, MoreHorizontal, Church, MapPin } from "lucide-react"
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

type ChurchStatus = "pending" | "approved" | "rejected"

interface ChurchItem {
  id: string
  name: string
  denomination: string
  pastor: string
  city: string
  address: string
  phone: string
  email: string
  dateSubmitted: string
  status: ChurchStatus
}

const initialChurches: ChurchItem[] = [
  { id: "1", name: "Victory Faith Assembly", denomination: "Pentecostal", pastor: "Rev. David Musara", city: "Harare", address: "45 Samora Machel Ave", phone: "+263 77 111 2222", email: "info@victoryfaith.co.zw", dateSubmitted: "2026-04-10", status: "pending" },
  { id: "2", name: "Grace Community Church", denomination: "Non-Denominational", pastor: "Pastor James Nkomo", city: "Bulawayo", address: "12 Robert Mugabe Way", phone: "+263 71 222 3333", email: "grace@gmail.com", dateSubmitted: "2026-04-09", status: "pending" },
  { id: "3", name: "Zion Temple Ministries", denomination: "Apostolic", pastor: "Apostle T. Makandiwa", city: "Chitungwiza", address: "Unit L Zengeza 4", phone: "+263 78 333 4444", email: "ziontemple@yahoo.com", dateSubmitted: "2026-04-08", status: "approved" },
  { id: "4", name: "Living Waters Chapel", denomination: "Baptist", pastor: "Rev. Sarah Chikwanda", city: "Mutare", address: "78 Main Street", phone: "+263 77 444 5555", email: "lwc@outlook.com", dateSubmitted: "2026-04-07", status: "approved" },
  { id: "5", name: "Christ the King Cathedral", denomination: "Catholic", pastor: "Fr. Michael Banda", city: "Gweru", address: "Cathedral Square", phone: "+263 73 555 6666", email: "ctk.gweru@gmail.com", dateSubmitted: "2026-04-06", status: "approved" },
  { id: "6", name: "New Life Tabernacle", denomination: "Charismatic", pastor: "Prophet E. Mawarire", city: "Harare", address: "Stand 234 Borrowdale", phone: "+263 77 666 7777", email: "newlife@gmail.com", dateSubmitted: "2026-04-12", status: "pending" },
  { id: "7", name: "Harvest International", denomination: "Evangelical", pastor: "Bishop C. Rupapa", city: "Masvingo", address: "15 Hughes Street", phone: "+263 71 777 8888", email: "harvest.msv@gmail.com", dateSubmitted: "2026-04-11", status: "rejected" },
]

const statusColors: Record<ChurchStatus, string> = {
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  approved: "bg-emerald-100 text-emerald-800 border-emerald-200",
  rejected: "bg-red-100 text-red-800 border-red-200",
}

export default function AdminChurchesPage() {
  const [churches, setChurches] = useState<ChurchItem[]>(initialChurches)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"all" | ChurchStatus>("all")
  const [selectedChurch, setSelectedChurch] = useState<ChurchItem | null>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)

  const filteredChurches = churches.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.pastor.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase()) ||
      c.denomination.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === "all" || c.status === filter
    return matchesSearch && matchesFilter
  })

  const updateStatus = (id: string, status: ChurchStatus) => {
    setChurches((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    )
  }

  const pendingCount = churches.filter((c) => c.status === "pending").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-[#2F0B20]">
            Churches Management
          </h1>
          <p className="text-sm text-[#7A5A6D]">
            Review and approve church directory submissions
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
            placeholder="Search churches..."
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
              <TableHead className="font-semibold text-[#2F0B20]">Church</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Pastor</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Location</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Denomination</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Date</TableHead>
              <TableHead className="font-semibold text-[#2F0B20]">Status</TableHead>
              <TableHead className="text-right font-semibold text-[#2F0B20]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredChurches.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="py-12 text-center text-[#7A5A6D]">
                  No churches found
                </TableCell>
              </TableRow>
            ) : (
              filteredChurches.map((church) => (
                <TableRow key={church.id} className="hover:bg-[#F5F0E8]/30">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#551839]/10">
                        <Church className="h-4 w-4 text-[#551839]" />
                      </div>
                      <span className="font-medium text-[#2F0B20]">{church.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-[#7A5A6D]">{church.pastor}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-[#7A5A6D]">
                      <MapPin className="h-3 w-3" />
                      {church.city}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#8B6914]">
                      {church.denomination}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[#7A5A6D]">{church.dateSubmitted}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[church.status]}>
                      {church.status.charAt(0).toUpperCase() + church.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      {church.status === "pending" && (
                        <>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
                            onClick={() => updateStatus(church.id, "approved")}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 hover:text-red-700"
                            onClick={() => updateStatus(church.id, "rejected")}
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
                              setSelectedChurch(church)
                              setViewDialogOpen(true)
                            }}
                          >
                            <Eye className="mr-2 h-4 w-4" /> View Details
                          </DropdownMenuItem>
                          {church.status !== "approved" && (
                            <DropdownMenuItem onClick={() => updateStatus(church.id, "approved")}>
                              <Check className="mr-2 h-4 w-4" /> Approve
                            </DropdownMenuItem>
                          )}
                          {church.status !== "rejected" && (
                            <DropdownMenuItem onClick={() => updateStatus(church.id, "rejected")}>
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
            <DialogTitle className="font-serif text-xl text-[#2F0B20]">Church Details</DialogTitle>
            <DialogDescription className="text-[#7A5A6D]">
              Full information for this church submission
            </DialogDescription>
          </DialogHeader>
          {selectedChurch && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Church Name</p>
                  <p className="font-medium text-[#2F0B20]">{selectedChurch.name}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Denomination</p>
                  <p className="font-medium text-[#2F0B20]">{selectedChurch.denomination}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Pastor</p>
                  <p className="font-medium text-[#2F0B20]">{selectedChurch.pastor}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">City</p>
                  <p className="font-medium text-[#2F0B20]">{selectedChurch.city}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Address</p>
                  <p className="font-medium text-[#2F0B20]">{selectedChurch.address}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Phone</p>
                  <p className="font-medium text-[#2F0B20]">{selectedChurch.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Email</p>
                  <p className="font-medium text-[#2F0B20]">{selectedChurch.email}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase text-[#7A5A6D]">Status</p>
                  <Badge className={statusColors[selectedChurch.status]}>
                    {selectedChurch.status.charAt(0).toUpperCase() + selectedChurch.status.slice(1)}
                  </Badge>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            {selectedChurch?.status === "pending" && (
              <>
                <Button
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50"
                  onClick={() => {
                    updateStatus(selectedChurch.id, "rejected")
                    setViewDialogOpen(false)
                  }}
                >
                  <X className="mr-2 h-4 w-4" /> Reject
                </Button>
                <Button
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                  onClick={() => {
                    updateStatus(selectedChurch.id, "approved")
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
