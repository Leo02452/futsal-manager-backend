/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string({
    required_error: 'Missing params: email',
    invalid_type_error: 'email must be a string',
  }).email(),
  password: z.string({
    required_error: 'Missing params: password',
    invalid_type_error: 'password must be a string',
  }),
});

type loginDTO = z.infer<typeof loginSchema>;

export { loginSchema, loginDTO };
