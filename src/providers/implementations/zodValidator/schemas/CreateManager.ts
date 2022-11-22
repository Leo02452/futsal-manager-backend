/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';

const createManagerSchema = z.object({
  name: z.string({
    required_error: 'Missing params: name',
    invalid_type_error: 'name must be a string',
  }),
  email: z.string({
    required_error: 'Missing params: email',
    invalid_type_error: 'email must be a string',
  }).email(),
  password: z.string({
    required_error: 'Missing params: password',
    invalid_type_error: 'password must be a string',
  }),
});

type createManagerDTO = z.infer<typeof createManagerSchema>;

export { createManagerSchema, createManagerDTO };
