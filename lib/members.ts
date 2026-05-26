import { readJson, writeJson } from "@/lib/file-store"

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

const membersFile = "member-applications.json"

export async function listMembers() {
  return readJson<MemberApplication[]>(membersFile, [])
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
  const now = new Date().toISOString()
  const member: MemberApplication = {
    id: crypto.randomUUID(),
    ...input,
    name: `${input.firstName} ${input.lastName}`,
    status: "pending",
    dateApplied: now.slice(0, 10),
    createdAt: now,
    updatedAt: now,
  }

  const members = await listMembers()
  await writeJson(membersFile, [member, ...members])
  return member
}

export async function updateMemberStatus(id: string, status: MemberStatus) {
  const members = await listMembers()
  const member = members.find((item) => item.id === id)
  if (!member) return null

  const updated = { ...member, status, updatedAt: new Date().toISOString() }
  await writeJson(
    membersFile,
    members.map((item) => (item.id === id ? updated : item))
  )

  return updated
}
