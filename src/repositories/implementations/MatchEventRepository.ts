import prismaModel from '../../database/prisma';
import { ICreatedMatchEvent, IMatchEventToSave } from '../../entities/IMatchEvent';
import { ICreateMatchEventRepository, IFindMatchEventsRepository } from '../IMatchEventRepository';

export default class MatchEventRepository implements
ICreateMatchEventRepository,
IFindMatchEventsRepository {
  constructor(
    private _model: typeof prismaModel.matchEvent,
  ) { }

  async save(data: IMatchEventToSave) {
    await this._model.create({ data });
  }

  async getAll(matchId: string, game: string): Promise<ICreatedMatchEvent[]> {
    const matchEventsList = await this._model.findMany({
      where: { matchId, game },
      include: {
        eventPlayer: {
          select: { name: true },
        },
        assistPlayer: {
          select: { name: true },
        },
        event: {
          select: { name: true },
        },
      },
    });

    return matchEventsList;
  }
}
