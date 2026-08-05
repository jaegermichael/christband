import { NextResponse } from "next/server"
import { z } from "zod"
import { createMemberApplication, listMembers } from "@/lib/members"

const membershipSchema = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  email: z.string().trim().email(),
  phone: z.string().trim().min(7),
  memberType: z.string().trim().min(1),
  province: z.string().trim().min(1),
  city: z.string().trim().min(1),
  church: z.string().trim().optional(),
})

export async function GET() {
  return NextResponse.json({ members: await listMembers() })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const result = membershipSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json({ error: "Please complete all required fields with valid information." }, { status: 400 })
  }

  const member = await createMemberApplication({
    firstName: result.data.firstName,
    lastName: result.data.lastName,
    email: result.data.email,
    phone: result.data.phone,
    memberType: result.data.memberType,
    province: result.data.province,
    city: result.data.city,
    church: result.data.church || undefined,
  })

  return NextResponse.json({ member }, { status: 201 })
}
