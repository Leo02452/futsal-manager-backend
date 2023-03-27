import { IMatchEventToSave } from '../entities/IMatchEvent';

export interface ICreateMatchEventRepository {
  save(data: IMatchEventToSave): Promise<void>
}
