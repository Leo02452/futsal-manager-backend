import { z } from 'zod';

const createMatchSchema = z.object({
  date: z.string(),
  local: z.string(),
  teamId: z.string(),
  opponent: z.string(),
});

type ICreateMatchDTO = z.infer<typeof createMatchSchema>;

export { createMatchSchema, ICreateMatchDTO };
