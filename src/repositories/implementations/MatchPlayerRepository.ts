import prismaModel from '../../database/prisma';
import { IMatchPlayer } from '../../entities/IMatch';
import { ICreateMatchPlayerRepository, IFindMatchPlayerByMatch } from '../IMatchPlayerRepository';

export default class MatchPlayerRepository implements
ICreateMatchPlayerRepository,
IFindMatchPlayerByMatch {
  constructor(
    private _model: typeof prismaModel.matchPlayer,
  ) { }

  async save(matchPlayersList: IMatchPlayer[]): Promise<void> {
    await this._model.createMany({
      data: matchPlayersList,
    });
  }

  async getAll(matchId: string): Promise<IMatchPlayer[]> {
    const matchPlayersList = await this._model.findMany({
      where: { matchId },
      include: {
        player: {
          select: {
            name: true,
          },
        },
      },
    });
    return matchPlayersList;
  }
}
