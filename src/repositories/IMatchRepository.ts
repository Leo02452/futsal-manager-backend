import { IMatch } from '../entities/IMatch';

export interface ICreateMatchRepository {
  save(match: IMatch): Promise<void>
}
