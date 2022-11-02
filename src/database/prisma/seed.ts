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
      id: '00b755a6-f49f-4ce7-9be1-0be380db2f27',
    },
  });

  await prisma.event.createMany({
    data: [
      { id: '874969ae-fd42-497d-8727-266474730342', name: 'Gol feito' },
      { id: '2b0edcf8-bd45-4351-ba08-21b97c8133b2', name: 'Gol sofrido' },
      { id: '78479160-c885-4eb9-929b-a021db1f27b3', name: 'Falta feita' },
      { id: '0a1c69d2-0b23-4eef-896a-c5a9e92d11bb', name: 'Falta sofrida' },
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
