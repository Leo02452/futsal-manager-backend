import prismaModel from '../../database/prisma';
import { ICreatedMatchEvent, IMatchEventToSave } from '../../entities/IMatchEvent';
import {
  IUpdateMatchEventDTO,
} from '../../providers/implementations/zodValidator/schemas/MatchEvent';
import {
  ICreateMatchEventRepository,
  IDeleteMatchEventRepository,
  IFindMatchEventsRepository,
  IUpdateMatchEventRepository,
} from '../IMatchEventRepository';

export default class MatchEventRepository implements
ICreateMatchEventRepository,
IFindMatchEventsRepository,
IUpdateMatchEventRepository,
IDeleteMatchEventRepository {
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

  async update(id: string, data: IUpdateMatchEventDTO): Promise<void> {
    await this._model.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this._model.delete({
      where: { id },
    });
  }
}
