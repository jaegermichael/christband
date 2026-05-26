"use client"

import Link from "next/link"
import { Users, Church, Megaphone } from "lucide-react"

const sideActions = [
  {
    label: "Register Pastor",
    href: "/membership?type=pastor",
    icon: Users,
    bg: "from-[#551839] to-[#7A2A5E]",
  },
  {
    label: "Register a Church",
    href: "/membership?type=church",
    icon: Church,
    bg: "from-[#3B1027] to-[#551839]",
  },
  {
    label: "Register an Ad",
    href: "/membership?type=advert",
    icon: Megaphone,
    bg: "from-[#D4AF37] to-[#C49B2F]",
  },
]

export function SideButtons() {
  return (
    <div className="fixed right-0 top-1/3 z-40 hidden flex-col gap-2 lg:flex">
      {sideActions.map((action) => {
        const Icon = action.icon
        const isGold = action.bg.includes("D4AF37")
        return (
          <Link
            key={action.label}
            href={action.href}
            className={`flex items-center gap-2 rounded-l-xl bg-gradient-to-r ${action.bg} py-3 pl-3 pr-4 shadow-lg transition-all duration-300 hover:pr-6 hover:shadow-xl`}
          >
            <Icon className={`h-5 w-5 shrink-0 ${isGold ? "text-[#2F0B20]" : "text-[#D4AF37]"}`} />
            <span
              className={`whitespace-nowrap text-xs font-bold uppercase tracking-wide ${
                isGold ? "text-[#2F0B20]" : "text-[#FFFDF7]"
              }`}
            >
              {action.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
