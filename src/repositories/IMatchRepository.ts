import { ICreatedMatch, IMatch } from '../entities/IMatch';

export interface ICreateMatchRepository {
  save(match: IMatch): Promise<void>
}

export interface IListMatchesRepository {
  getAll(): Promise<ICreatedMatch[]>
}
