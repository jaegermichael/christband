import { prisma } from "@/lib/db"
import type { MemberApplication as PrismaMemberApplication, RecordStatus } from "@prisma/client"

export type MemberStatus = "pending" | "approved" | "rejected"

export type MemberApplication = {
  id: string
  firstName: string
  lastName: string
  name: string
  email: string
  phone: string
  memberType: string
  province: string
  city: string
  church?: string
  status: MemberStatus
  dateApplied: string
  createdAt: string
  updatedAt: string
}

const statusMap: Record<MemberStatus, RecordStatus> = {
  pending: "PENDING",
  approved: "APPROVED",
  rejected: "REJECTED",
}

const reverseStatusMap: Record<RecordStatus, MemberStatus> = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  ARCHIVED: "pending",
}

function normalizeMember(member: PrismaMemberApplication): MemberApplication {
  return {
    id: member.id,
    firstName: member.firstName,
    lastName: member.lastName,
    name: `${member.firstName} ${member.lastName}`,
    email: member.email,
    phone: member.phone,
    memberType: member.memberType,
    province: member.province,
    city: member.city,
    church: member.church ?? undefined,
    status: reverseStatusMap[member.status] ?? "pending",
    dateApplied: member.createdAt.toISOString().slice(0, 10),
    createdAt: member.createdAt.toISOString(),
    updatedAt: member.updatedAt.toISOString(),
  }
}

export async function listMembers() {
  const members = await prisma.memberApplication.findMany({
    orderBy: { createdAt: "desc" },
  })
  return members.map(normalizeMember)
}

export async function createMemberApplication(input: {
  firstName: string
  lastName: string
  email: string
  phone: string
  memberType: string
  province: string
  city: string
  church?: string
}) {
  const member = await prisma.memberApplication.create({
    data: {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      memberType: input.memberType,
      province: input.province,
      city: input.city,
      church: input.church,
      status: statusMap.pending,
    },
  })

  return normalizeMember(member)
}

export async function updateMemberStatus(id: string, status: MemberStatus) {
  const updated = await prisma.memberApplication.update({
    where: { id },
    data: { status: statusMap[status] },
  })

  return normalizeMember(updated)
}
