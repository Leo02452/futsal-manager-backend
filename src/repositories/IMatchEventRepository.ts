import { ICreatedMatchEvent, IMatchEventToSave } from '../entities/IMatchEvent';
import { IUpdateMatchEventDTO } from '../providers/implementations/zodValidator/schemas/MatchEvent';

export interface ICreateMatchEventRepository {
  save(data: IMatchEventToSave): Promise<void>
}

export interface IFindMatchEventsRepository {
  getAll(matchId: string, game: string): Promise<ICreatedMatchEvent[]>
}

export interface IUpdateMatchEventRepository {
  update(id: string, data: IUpdateMatchEventDTO): Promise<void>
}

export interface IDeleteMatchEventRepository {
  delete(id: string): Promise<void>
}
