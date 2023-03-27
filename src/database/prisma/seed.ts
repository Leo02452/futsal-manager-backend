import { PrismaClient } from '@prisma/client';
import {
  events,
  match,
  players,
  team,
  user,
} from './seeders/data';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert(user);
  await prisma.event.createMany(events);
  await prisma.team.create(team);
  await prisma.player.createMany(players);
  await prisma.match.create(match);
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
