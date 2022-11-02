import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'johndoe@prisma.io' },
    update: {},
    create: {
      email: 'johndoe@prisma.io',
      name: 'John Doe',
      password: 'johndoe@123',
      id: 1,
    },
  });

  await prisma.event.createMany({
    data: [
      { id: 1, name: 'Gol feito' },
      { id: 2, name: 'Gol sofrido' },
      { id: 3, name: 'Falta feita' },
      { id: 4, name: 'Falta sofrida' },
    ],
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
