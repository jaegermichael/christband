import { NextResponse } from "next/server"
import { createMemberApplication, listMembers } from "@/lib/members"

export async function GET() {
  return NextResponse.json({ members: await listMembers() })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const required = ["firstName", "lastName", "email", "phone", "memberType", "province", "city"]

  if (!body || required.some((key) => typeof body[key] !== "string" || body[key].trim() === "")) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 })
  }

  const member = await createMemberApplication({
    firstName: body.firstName.trim(),
    lastName: body.lastName.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    memberType: body.memberType.trim(),
    province: body.province.trim(),
    city: body.city.trim(),
    church: typeof body.church === "string" && body.church.trim() ? body.church.trim() : undefined,
  })

  return NextResponse.json({ member }, { status: 201 })
}
