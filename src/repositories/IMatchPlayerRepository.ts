import { IMatchPlayer } from '../entities/IMatch';

export interface ICreateMatchPlayerRepository {
  save(matchPlayersList: IMatchPlayer[]): Promise<void>
}
