import { z } from 'zod';

const createManagerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type createManagerDTO = z.infer<typeof createManagerSchema>;

export { createManagerSchema, createManagerDTO };
