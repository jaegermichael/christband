import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth/nextauth"
import { getFirebaseAdminDb } from "@/lib/firebase/admin"
import { COLLECTIONS, type PaymentStatus } from "@/lib/firebase/collections"

type PaymentDoc = {
  title: string
  amount: number
  method?: string
  reference?: string
  status: PaymentStatus
  createdAt?: any
}

async function confirmPayment(formData: FormData) {
  "use server"
  const id = String(formData.get("id") || "")
  if (!id) return
  const firebaseAdminDb = getFirebaseAdminDb()
  await firebaseAdminDb.collection(COLLECTIONS.payments).doc(id).update({ status: "confirmed" })
}

async function failPayment(formData: FormData) {
  "use server"
  const id = String(formData.get("id") || "")
  if (!id) return
  const firebaseAdminDb = getFirebaseAdminDb()
  await firebaseAdminDb.collection(COLLECTIONS.payments).doc(id).update({ status: "failed" })
}

export default async function AdminPaymentsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/admin/login")

  const firebaseAdminDb = getFirebaseAdminDb()

  const snap = await firebaseAdminDb
    .collection(COLLECTIONS.payments)
    .orderBy("createdAt", "desc")
    .limit(50)
    .get()

  const payments = snap.docs.map((d) => ({ id: d.id, ...(d.data() as PaymentDoc) }))

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-[#2D1B4E]">Payments</h1>
        <p className="mt-1 text-sm text-[#6B5A8A]">Confirm incoming payments.</p>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#E8E0D0] bg-[#FFFFFF] shadow-sm">
        <div className="divide-y divide-[#E8E0D0]">
          {payments.length === 0 ? (
            <div className="p-6 text-sm text-[#6B5A8A]">No payments found.</div>
          ) : (
            payments.map((p) => (
              <div key={p.id} className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="truncate text-sm font-semibold text-[#2D1B4E]">{p.title}</p>
                    <span className="rounded-full bg-[#F5F0E8] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#4B2E83]">
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#8B7AAA]">
                    {typeof p.amount === "number" ? `$${p.amount}` : "—"}
                    {p.method ? ` • ${p.method}` : ""}
                    {p.reference ? ` • Ref: ${p.reference}` : ""}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <form action={confirmPayment}>
                    <input type="hidden" name="id" value={p.id} />
                    <button
                      type="submit"
                      className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-50"
                      disabled={p.status !== "pending"}
                    >
                      Confirm
                    </button>
                  </form>
                  <form action={failPayment}>
                    <input type="hidden" name="id" value={p.id} />
                    <button
                      type="submit"
                      className="rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-50"
                      disabled={p.status !== "pending"}
                    >
                      Mark Failed
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
