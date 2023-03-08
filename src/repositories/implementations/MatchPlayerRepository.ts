import prismaModel from '../../database/prisma';
import { IMatchPlayer } from '../../entities/IMatch';
import { ICreateMatchPlayerRepository } from '../IMatchPlayerRepository';

export default class MatchPlayerRepository implements ICreateMatchPlayerRepository {
  constructor(
    private _model: typeof prismaModel.matchPlayer,
  ) { }

  async save(matchPlayersList: IMatchPlayer[]): Promise<void> {
    await this._model.createMany({
      data: matchPlayersList,
    });
  }
}
