import prismaModel from '../../database/prisma';
import { IMatchEventToSave } from '../../entities/IMatchEvent';
import { ICreateMatchEventRepository } from '../IMatchEventRepository';

export default class MatchEventRepository implements
ICreateMatchEventRepository {
  constructor(
    private _model: typeof prismaModel.matchEvent,
  ) { }

  async save(data: IMatchEventToSave) {
    await this._model.create({ data });
  }
}
