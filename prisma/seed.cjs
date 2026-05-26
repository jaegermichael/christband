const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcryptjs")

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@christbrand.co.zw"
  const password = process.env.ADMIN_PASSWORD

  if (!password) {
    throw new Error("ADMIN_PASSWORD must be set before seeding the database")
  }

  await prisma.adminUser.upsert({
    where: { email },
    update: {
      name: "Christbrand Admin",
      passwordHash: await bcrypt.hash(password, 12),
      role: "OWNER",
      active: true,
    },
    create: {
      name: "Christbrand Admin",
      email,
      passwordHash: await bcrypt.hash(password, 12),
      role: "OWNER",
      active: true,
    },
  })

  await prisma.memberApplication.createMany({
    data: [
      {
        firstName: "Tendai",
        lastName: "Moyo",
        email: "tendai@gmail.com",
        phone: "+263 77 123 4567",
        memberType: "Individual Believer",
        province: "Harare",
        city: "Harare",
        church: "Grace Fellowship Church",
      },
      {
        firstName: "Grace",
        lastName: "Ndlovu",
        email: "grace.ndlovu@yahoo.com",
        phone: "+263 71 234 5678",
        memberType: "Pastor / Church Leader",
        province: "Bulawayo",
        city: "Bulawayo",
        church: "Victory Bible Church",
      },
    ],
    skipDuplicates: true,
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
