import { ICreatedMatchEvent, IMatchEventToSave } from '../entities/IMatchEvent';

export interface ICreateMatchEventRepository {
  save(data: IMatchEventToSave): Promise<void>
}

export interface IFindMatchEventsRepository {
  getAll(matchId: string, game: string): Promise<ICreatedMatchEvent[]>
}
