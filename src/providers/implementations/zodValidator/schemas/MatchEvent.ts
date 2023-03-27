import { z } from 'zod';

const createMatchEventSchema = z.object({
  eventId: z.string(),
  eventPlayerId: z.string(),
  matchId: z.string(),
  hasAssist: z.boolean(),
  assistPlayerId: z.string().optional(),
  game: z.string(),
})
  .refine((schema) => (schema.hasAssist ? !!schema.assistPlayerId : true), {
    message: 'Informe o jogador que deu assistência',
  });

type ICreateMatchEventDTO = z.infer<typeof createMatchEventSchema>;

export { createMatchEventSchema, ICreateMatchEventDTO };
