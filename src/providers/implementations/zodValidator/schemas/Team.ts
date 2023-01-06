/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';

const createTeamSchema = z.object({
  name: z.string({
    required_error: 'Parâmetro ausente: name (time)',
    invalid_type_error: 'Valor de name (time) deve ser do tipo texto',
  }),
  userId: z.string({
    required_error: 'Parâmetro ausente: userId',
    invalid_type_error: 'Valor de userId deve ser do tipo texto',
  }),
  players: z.array(z.string()).min(5),
});

type ICreateTeamDTO = z.infer<typeof createTeamSchema>;

export { createTeamSchema, ICreateTeamDTO };
