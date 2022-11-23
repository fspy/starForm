import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { ferramentas, bitolas } from "./itl50";

async function main() {
  await prisma.ferramenta.createMany({ data: ferramentas });
  await prisma.formadora.create({
    data: {
      nome: "ITL-50",
      bitolas: {
        create: bitolas,
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
