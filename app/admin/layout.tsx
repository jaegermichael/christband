import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth/nextauth"

export const metadata = {
  title: "Admin Panel — Christbrand",
  description: "Manage members, churches, pastors, adverts, and payments.",
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="flex min-h-screen bg-[#F5F0E8]">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
