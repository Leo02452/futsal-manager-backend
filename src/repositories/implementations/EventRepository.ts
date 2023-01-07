import prismaModel from '../../database/prisma';
import { IEvent } from '../../entities/IEvent';
import { IEventRepository } from '../IEventRepository';

export default class EventRepository implements IEventRepository {
  constructor(
    private _model: typeof prismaModel.event,
  ) { }

  async getAll(): Promise<IEvent[]> {
    return this._model.findMany();
  }
}
