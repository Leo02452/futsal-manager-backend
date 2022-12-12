/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';

const createPlayerSchema = z.object({
  name: z.string({
    required_error: 'Missing params: name',
    invalid_type_error: 'name must be a string',
  }),
  teamId: z.string({
    required_error: 'Missing params: teamId',
    invalid_type_error: 'teamId must be a string',
  }),
});

type ICreatePlayerDTO = z.infer<typeof createPlayerSchema>;

export { createPlayerSchema, ICreatePlayerDTO };
