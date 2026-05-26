import { AdminSidebar } from "@/components/admin/admin-sidebar"

export const metadata = {
  title: "Admin Panel - Christbrand",
  description: "Manage members, churches, pastors, adverts, and payments.",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F5F0E8]">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
