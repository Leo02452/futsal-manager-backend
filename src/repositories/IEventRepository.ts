import { IEvent } from '../entities/IEvent';

export interface IEventRepository {
  getAll(): Promise<IEvent[]>
}
