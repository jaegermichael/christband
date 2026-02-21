"use client"

import Link from "next/link"
import { Users, Church, Megaphone } from "lucide-react"

const sideActions = [
  {
    label: "Register Pastor",
    href: "/pastors#register",
    icon: Users,
    bg: "from-[#4B2E83] to-[#6B4EAA]",
  },
  {
    label: "Register a Church",
    href: "/churches#register",
    icon: Church,
    bg: "from-[#3A2268] to-[#4B2E83]",
  },
  {
    label: "Register an Ad",
    href: "/businesses#adverts",
    icon: Megaphone,
    bg: "from-[#D4AF37] to-[#C49B2F]",
  },
]

export function SideButtons() {
  return (
    <div className="fixed right-0 top-1/3 z-40 flex flex-col gap-2">
      {sideActions.map((action) => {
        const Icon = action.icon
        const isGold = action.bg.includes("D4AF37")
        return (
          <Link
            key={action.label}
            href={action.href}
            className={`flex items-center gap-2 rounded-l-xl bg-gradient-to-r ${action.bg} py-3 pl-3 pr-4 shadow-lg transition-all duration-300 hover:pr-6 hover:shadow-xl`}
          >
            <Icon className={`h-5 w-5 shrink-0 ${isGold ? "text-[#2D1B4E]" : "text-[#D4AF37]"}`} />
            <span
              className={`whitespace-nowrap text-xs font-bold uppercase tracking-wide ${
                isGold ? "text-[#2D1B4E]" : "text-[#FFFDF7]"
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
