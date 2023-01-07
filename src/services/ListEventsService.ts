import { IEvent } from '../entities/IEvent';
import { IEventRepository } from '../repositories/IEventRepository';

export default class ListEventsService {
  constructor(
    private _eventRepository: IEventRepository,
  ) { }

  async execute(): Promise<IEvent[]> {
    const eventsList = await this._eventRepository.getAll();
    return eventsList;
  }
}
