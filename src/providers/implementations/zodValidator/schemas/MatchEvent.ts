import { z } from 'zod';

const updateMatchEventSchema = z.object({
  eventId: z.string(),
  eventPlayerId: z.string(),
  hasAssist: z.boolean(),
  assistPlayerId: z.string().optional(),
});

const createMatchEventSchema = updateMatchEventSchema.extend({
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
type IUpdateMatchEventDTO = z.infer<typeof updateMatchEventSchema>;

export {
  createMatchEventSchema,
  updateMatchEventSchema,
  ICreateMatchEventDTO,
  IUpdateMatchEventDTO,
};
