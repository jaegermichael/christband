import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth/nextauth"
import { getFirebaseAdminDb } from "@/lib/firebase/admin"
import { COLLECTIONS, type AdStatus } from "@/lib/firebase/collections"

type AdDoc = {
  title: string
  businessName?: string
  imageUrl?: string
  link?: string
  status: AdStatus
  createdAt?: any
}

async function approveAd(formData: FormData) {
  "use server"
  const id = String(formData.get("id") || "")
  if (!id) return
  const firebaseAdminDb = getFirebaseAdminDb()
  await firebaseAdminDb.collection(COLLECTIONS.ads).doc(id).update({ status: "approved" })
}

async function rejectAd(formData: FormData) {
  "use server"
  const id = String(formData.get("id") || "")
  if (!id) return
  const firebaseAdminDb = getFirebaseAdminDb()
  await firebaseAdminDb.collection(COLLECTIONS.ads).doc(id).update({ status: "rejected" })
}

export default async function AdminAdsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/admin/login")

  const firebaseAdminDb = getFirebaseAdminDb()

  const snap = await firebaseAdminDb
    .collection(COLLECTIONS.ads)
    .orderBy("createdAt", "desc")
    .limit(50)
    .get()

  const ads = snap.docs.map((d) => ({ id: d.id, ...(d.data() as AdDoc) }))

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-[#2D1B4E]">Adverts</h1>
        <p className="mt-1 text-sm text-[#6B5A8A]">Approve or reject adverts before they go live.</p>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#E8E0D0] bg-[#FFFFFF] shadow-sm">
        <div className="divide-y divide-[#E8E0D0]">
          {ads.length === 0 ? (
            <div className="p-6 text-sm text-[#6B5A8A]">No adverts found.</div>
          ) : (
            ads.map((ad) => (
              <div key={ad.id} className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="truncate text-sm font-semibold text-[#2D1B4E]">{ad.title}</p>
                    <span className="rounded-full bg-[#F5F0E8] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#4B2E83]">
                      {ad.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#8B7AAA]">
                    {ad.businessName ? ad.businessName : "—"}
                    {ad.link ? ` • ${ad.link}` : ""}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <form action={approveAd}>
                    <input type="hidden" name="id" value={ad.id} />
                    <button
                      type="submit"
                      className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-50"
                      disabled={ad.status !== "pending"}
                    >
                      Approve
                    </button>
                  </form>
                  <form action={rejectAd}>
                    <input type="hidden" name="id" value={ad.id} />
                    <button
                      type="submit"
                      className="rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-50"
                      disabled={ad.status !== "pending"}
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
