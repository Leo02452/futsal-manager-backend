import prismaModel from '../../database/prisma';
import { ICreatedMatch, IMatch } from '../../entities/IMatch';
import { ICreateMatchRepository, IListMatchesRepository } from '../IMatchRepository';

export default class MatchRepository implements
ICreateMatchRepository,
IListMatchesRepository {
  constructor(
    private _model: typeof prismaModel.match,
  ) { }

  async save(match: IMatch) {
    await this._model.create({
      data: match,
    });
  }

  async getAll(): Promise<ICreatedMatch[]> {
    return this._model.findMany();
  }
}
