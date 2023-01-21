import { z } from 'zod';

const createMatchSchema = z.object({
  local: z.string(),
  teamId: z.string(),
  opponent: z.string(),
  date: z.preprocess((string) => new Date(string as string), z.date()),
});

type ICreateMatchDTO = z.infer<typeof createMatchSchema>;

export { createMatchSchema, ICreateMatchDTO };
