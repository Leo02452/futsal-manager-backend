import { ICreatedMatch } from '../entities/IMatch';
import { IListMatchesRepository } from '../repositories/IMatchRepository';

export default class ListMatchesService {
  constructor(
    private _matchRepository: IListMatchesRepository,
  ) { }

  async execute(): Promise<ICreatedMatch[]> {
    const matchesList = await this._matchRepository.getAll();
    return matchesList;
  }
}
