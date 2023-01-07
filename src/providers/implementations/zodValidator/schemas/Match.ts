import { z } from 'zod';

const createMatchSchema = z.object({
  date: z.date(),
  local: z.string(),
  teamId: z.string(),
  opponent: z.string(),
});

type ICreateMatchDTO = z.infer<typeof createMatchSchema>;

export { createMatchSchema, ICreateMatchDTO };
