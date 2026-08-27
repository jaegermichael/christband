"use client"

import Link from "next/link"
import { Users, Church, Megaphone } from "lucide-react"

const sideActions = [
  {
    label: "Register Pastor",
    href: "/membership?type=pastor",
    icon: Users,
    bg: "from-[#3A0353] to-[#8048AA]",
    foreground: "text-white",
    iconColor: "text-[#F8D299]",
  },
  {
    label: "Register a Church",
    href: "/membership?type=church",
    icon: Church,
    bg: "from-[#4F1A74] to-[#8048AA]",
    foreground: "text-white",
    iconColor: "text-[#F8D299]",
  },
  {
    label: "Register an Ad",
    href: "/membership?type=advert",
    icon: Megaphone,
    bg: "from-[#F59E51] to-[#F8D299]",
    foreground: "text-[#3A0353]",
    iconColor: "text-[#3A0353]",
  },
]

export function SideButtons() {
  return (
    <div className="fixed right-0 top-1/3 z-40 hidden flex-col gap-2 lg:flex" aria-label="Quick registration actions">
      {sideActions.map((action) => {
        const Icon = action.icon
        return (
          <Link
            key={action.label}
            href={action.href}
            className={`flex items-center gap-2 rounded-l-xl border border-white/15 bg-gradient-to-r ${action.bg} py-3 pl-3 pr-4 shadow-[0_10px_28px_rgba(58,3,83,0.22)] transition-all duration-300 hover:pr-6 hover:shadow-[0_12px_32px_rgba(58,3,83,0.3)] focus-visible:outline-white`}
          >
            <Icon className={`h-5 w-5 shrink-0 ${action.iconColor}`} aria-hidden="true" />
            <span className={`whitespace-nowrap text-xs font-bold uppercase tracking-wide ${action.foreground}`}>
              {action.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
