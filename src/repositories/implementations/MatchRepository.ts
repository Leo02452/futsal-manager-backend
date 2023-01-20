import prismaModel from '../../database/prisma';
import { IMatch } from '../../entities/IMatch';
import { ICreateMatchRepository } from '../IMatchRepository';

export default class MatchRepository implements
ICreateMatchRepository {
  constructor(
    private _model: typeof prismaModel.match,
  ) { }

  async save(match: IMatch) {
    await this._model.create({
      data: match,
    });
  }
}
