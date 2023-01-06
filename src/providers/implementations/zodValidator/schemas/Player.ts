/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';

const createPlayerSchema = z.object({
  name: z.string({
    required_error: 'Parâmetro ausente: name',
    invalid_type_error: 'Valor de name deve ser do tipo texto',
  }),
  teamId: z.string({
    required_error: 'Parâmetro ausente: teamId',
    invalid_type_error: 'Valor de teamId deve ser do tipo texto',
  }),
});

type ICreatePlayerDTO = z.infer<typeof createPlayerSchema>;

export { createPlayerSchema, ICreatePlayerDTO };
