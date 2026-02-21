export const COLLECTIONS = {
  admins: "admins",
  members: "members",
  payments: "payments",
  ads: "ads",
} as const

export type MemberStatus = "pending" | "approved" | "rejected"
export type PaymentStatus = "pending" | "confirmed" | "failed"
export type AdStatus = "pending" | "approved" | "rejected"
