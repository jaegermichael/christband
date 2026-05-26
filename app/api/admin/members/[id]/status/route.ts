import { NextResponse } from "next/server"
import { updateMemberStatus, type MemberStatus } from "@/lib/members"

const statuses: MemberStatus[] = ["pending", "approved", "rejected"]

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await request.json().catch(() => null)

  if (!body || !statuses.includes(body.status)) {
    return NextResponse.json({ error: "Invalid member status." }, { status: 400 })
  }

  const member = await updateMemberStatus(id, body.status)
  if (!member) {
    return NextResponse.json({ error: "Member application not found." }, { status: 404 })
  }

  return NextResponse.json({ member })
}
