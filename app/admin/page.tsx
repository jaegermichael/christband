"use client"

import {
  Users,
  Church,
  UserCheck,
  Megaphone,
  CreditCard,
  Clock,
  TrendingUp,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

const stats = [
  { label: "Total Members", value: "247", change: "+18 this week", icon: Users, color: "from-[#4B2E83] to-[#6B4EAA]", href: "/admin/members" },
  { label: "Churches", value: "52", change: "+3 this month", icon: Church, color: "from-[#3A2268] to-[#4B2E83]", href: "/admin/churches" },
  { label: "Pastors", value: "68", change: "+5 this month", icon: UserCheck, color: "from-[#6B4EAA] to-[#8B6EC0]", href: "/admin/pastors" },
  { label: "Active Ads", value: "23", change: "6 pending", icon: Megaphone, color: "from-[#D4AF37] to-[#C49B2F]", href: "/admin/ads" },
  { label: "Pending Approvals", value: "35", change: "Needs attention", icon: Clock, color: "from-[#C49B2F] to-[#A88525]", href: "/admin/members" },
  { label: "Payments", value: "$1,240", change: "4 to confirm", icon: CreditCard, color: "from-[#4B2E83] to-[#3A2268]", href: "/admin/payments" },
]

const recentActivity = [
  { type: "member", action: "New registration", name: "Tendai Moyo", city: "Harare", time: "5 min ago", status: "pending" },
  { type: "church", action: "Church submitted", name: "Grace Assembly", city: "Bulawayo", time: "12 min ago", status: "pending" },
  { type: "payment", action: "Payment received", name: "EcoCash — $5.00", city: "Mutare", time: "25 min ago", status: "confirmed" },
  { type: "ad", action: "Ad submitted", name: "Faith Print Solutions", city: "Harare", time: "1 hr ago", status: "pending" },
  { type: "pastor", action: "Pastor registered", name: "Rev. C. Ndlovu", city: "Gweru", time: "2 hrs ago", status: "approved" },
  { type: "member", action: "New registration", name: "Rufaro Chidza", city: "Masvingo", time: "2 hrs ago", status: "pending" },
  { type: "payment", action: "Payment received", name: "Paynow — $15.00", city: "Harare", time: "3 hrs ago", status: "confirmed" },
  { type: "ad", action: "Ad rejected", name: "XYZ Betting", city: "Harare", time: "3 hrs ago", status: "rejected" },
  { type: "church", action: "Church approved", name: "Living Waters", city: "Chinhoyi", time: "4 hrs ago", status: "approved" },
  { type: "member", action: "New registration", name: "Blessing Juma", city: "Kwekwe", time: "5 hrs ago", status: "pending" },
]

const statusIcon = {
  pending: <AlertCircle className="h-4 w-4 text-[#D4AF37]" />,
  approved: <CheckCircle2 className="h-4 w-4 text-emerald-500" />,
  confirmed: <CheckCircle2 className="h-4 w-4 text-emerald-500" />,
  rejected: <XCircle className="h-4 w-4 text-red-500" />,
}

const statusColors = {
  pending: "bg-[#D4AF37]/10 text-[#C49B2F]",
  approved: "bg-emerald-50 text-emerald-700",
  confirmed: "bg-emerald-50 text-emerald-700",
  rejected: "bg-red-50 text-red-700",
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-[#E8E0D0] bg-[#FFFFFF] px-6 py-5 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-2xl font-bold text-[#2D1B4E]">Dashboard</h1>
            <p className="mt-1 text-sm text-[#6B5A8A]">Overview of your Christbrand platform</p>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-600">Platform Active</span>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon
            const isGold = stat.color.includes("D4AF37")
            return (
              <Link
                key={stat.label}
                href={stat.href}
                className="group flex items-start gap-4 rounded-xl border border-[#E8E0D0] bg-[#FFFFFF] p-5 shadow-sm transition-all hover:border-[#D4AF37]/30 hover:shadow-md"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-md`}>
                  <Icon className={`h-6 w-6 ${isGold ? "text-[#2D1B4E]" : "text-[#FFFDF7]"}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#6B5A8A]">{stat.label}</p>
                  <p className="mt-1 font-serif text-2xl font-bold text-[#2D1B4E]">{stat.value}</p>
                  <p className="mt-0.5 text-xs text-[#8B7AAA]">{stat.change}</p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-[#2D1B4E]">Recent Activity</h2>
            <span className="text-sm text-[#6B5A8A]">Last 24 hours</span>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#E8E0D0] bg-[#FFFFFF] shadow-sm">
            <div className="divide-y divide-[#E8E0D0]">
              {recentActivity.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-[#F5F0E8]/50"
                >
                  <div className="shrink-0">
                    {statusIcon[item.status as keyof typeof statusIcon]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#2D1B4E]">
                      {item.action}:{" "}
                      <span className="font-semibold">{item.name}</span>
                    </p>
                    <p className="text-xs text-[#8B7AAA]">{item.city}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      statusColors[item.status as keyof typeof statusColors]
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="shrink-0 text-xs text-[#8B7AAA]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link
            href="/admin/members"
            className="flex items-center gap-3 rounded-xl border border-[#E8E0D0] bg-[#FFFFFF] p-4 transition-all hover:border-[#D4AF37]/30 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4B2E83]/10">
              <Users className="h-5 w-5 text-[#4B2E83]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2D1B4E]">Review Members</p>
              <p className="text-xs text-[#6B5A8A]">View pending approvals</p>
            </div>
          </Link>
          <Link
            href="/admin/ads"
            className="flex items-center gap-3 rounded-xl border border-[#E8E0D0] bg-[#FFFFFF] p-4 transition-all hover:border-[#D4AF37]/30 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D4AF37]/10">
              <Megaphone className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2D1B4E]">Review Adverts</p>
              <p className="text-xs text-[#6B5A8A]">View pending review</p>
            </div>
          </Link>
          <Link
            href="/admin/payments"
            className="flex items-center gap-3 rounded-xl border border-[#E8E0D0] bg-[#FFFFFF] p-4 transition-all hover:border-[#D4AF37]/30 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
              <CreditCard className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2D1B4E]">Confirm Payments</p>
              <p className="text-xs text-[#6B5A8A]">View awaiting confirmation</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
