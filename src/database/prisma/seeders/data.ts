export const user = {
  where: { email: 'johndoe@prisma.io' },
  update: {},
  create: {
    email: 'johndoe@prisma.io',
    name: 'John Doe',
    password: 'johndoe@123',
    id: '00b755a6-f49f-4ce7-9be1-0be380db2f27',
  },
};

export const events = {
  data: [
    { id: '874969ae-fd42-497d-8727-266474730342', name: 'Gol feito' },
    { id: '2b0edcf8-bd45-4351-ba08-21b97c8133b2', name: 'Gol sofrido' },
    { id: '78479160-c885-4eb9-929b-a021db1f27b3', name: 'Falta feita' },
    { id: '0a1c69d2-0b23-4eef-896a-c5a9e92d11bb', name: 'Falta sofrida' },
  ],
};

export const team = {
  data: {
    id: '2',
    name: 'Johns Team',
    userId: user.create.id,
  },
};

export const players = {
  data: [
    {
      id: '2845d071-1414-4565-aa24-e9b824c44e91',
      name: 'Johns Friend',
      teamId: team.data.id,
    },
    {
      id: '97d95ec9-aba3-4c74-bb44-753de3d02a7f',
      name: 'Johns Uncle',
      teamId: team.data.id,
    },
    {
      id: '28beaa5f-ca6f-4d7e-b0cd-20bfb927317b',
      name: 'Johns Brother',
      teamId: team.data.id,
    },
  ],
};

export const match = {
  data: {
    id: 'af5e39e6-12e8-47da-930f-14212aebcf3e',
    date: new Date(),
    local: 'Casa',
    opponent: 'Johns Rivals',
    teamId: team.data.id,
  },
};

export const matchPlayers = {
  data: [
    {
      matchId: match.data.id,
      playerId: players.data[0].id,
    },
    {
      matchId: match.data.id,
      playerId: players.data[2].id,
    },
  ],
};
