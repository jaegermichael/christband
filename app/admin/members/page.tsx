import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth/nextauth"
import { getFirebaseAdminDb } from "@/lib/firebase/admin"
import { COLLECTIONS, type MemberStatus } from "@/lib/firebase/collections"

type MemberDoc = {
  name: string
  email?: string
  city?: string
  status: MemberStatus
  createdAt?: any
}

async function approveMember(formData: FormData) {
  "use server"
  const id = String(formData.get("id") || "")
  if (!id) return
  const firebaseAdminDb = getFirebaseAdminDb()
  await firebaseAdminDb.collection(COLLECTIONS.members).doc(id).update({ status: "approved" })
}

async function rejectMember(formData: FormData) {
  "use server"
  const id = String(formData.get("id") || "")
  if (!id) return
  const firebaseAdminDb = getFirebaseAdminDb()
  await firebaseAdminDb.collection(COLLECTIONS.members).doc(id).update({ status: "rejected" })
}

export default async function AdminMembersPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/admin/login")

  const firebaseAdminDb = getFirebaseAdminDb()

  const snap = await firebaseAdminDb
    .collection(COLLECTIONS.members)
    .orderBy("createdAt", "desc")
    .limit(50)
    .get()

  const members = snap.docs.map((d) => ({ id: d.id, ...(d.data() as MemberDoc) }))

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-[#2D1B4E]">Members</h1>
        <p className="mt-1 text-sm text-[#6B5A8A]">Approve or reject new member registrations.</p>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#E8E0D0] bg-[#FFFFFF] shadow-sm">
        <div className="divide-y divide-[#E8E0D0]">
          {members.length === 0 ? (
            <div className="p-6 text-sm text-[#6B5A8A]">No members found.</div>
          ) : (
            members.map((m) => (
              <div key={m.id} className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="truncate text-sm font-semibold text-[#2D1B4E]">{m.name}</p>
                    <span className="rounded-full bg-[#F5F0E8] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#4B2E83]">
                      {m.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#8B7AAA]">
                    {m.email ? m.email : "—"} {m.city ? `• ${m.city}` : ""}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <form action={approveMember}>
                    <input type="hidden" name="id" value={m.id} />
                    <button
                      type="submit"
                      className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-50"
                      disabled={m.status !== "pending"}
                    >
                      Approve
                    </button>
                  </form>
                  <form action={rejectMember}>
                    <input type="hidden" name="id" value={m.id} />
                    <button
                      type="submit"
                      className="rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-50"
                      disabled={m.status !== "pending"}
                    >
                      Reject
                    </button>
                  </form>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
