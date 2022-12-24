/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';

const createTeamSchema = z.object({
  name: z.string({
    required_error: 'Missing params: name (team)',
    invalid_type_error: 'name (team) must be a string',
  }),
  userId: z.string({
    required_error: 'Missing params: userId',
    invalid_type_error: 'userId must be a string',
  }),
  players: z.array(z.string()).min(5),
});

type ICreateTeamDTO = z.infer<typeof createTeamSchema>;

export { createTeamSchema, ICreateTeamDTO };
