import { IMatchPlayer } from '../entities/IMatch';

export interface ICreateMatchPlayerRepository {
  save(matchPlayersList: IMatchPlayer[]): Promise<void>
}

export interface IFindMatchPlayerByMatch {
  getAll(matchId: string): Promise<IMatchPlayer[]>
}
