import { z } from 'zod';

const createMatchPlayerSchema = z.object({
  matchId: z.string(),
  playersIdList: z.array(z.string()),
});

type ICreateMatchPlayerDTO = z.infer<typeof createMatchPlayerSchema>;

export { createMatchPlayerSchema, ICreateMatchPlayerDTO };
