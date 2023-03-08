import { IMatchPlayer } from '../entities/IMatch';
import { IFindMatchPlayerByMatch } from '../repositories/IMatchPlayerRepository';

export default class ListMatchPlayersService {
  constructor(
    private _matchPlayerRepository: IFindMatchPlayerByMatch,
  ) { }

  async execute(matchId: string): Promise<IMatchPlayer[]> {
    const matchPlayersList = await this._matchPlayerRepository.getAll(matchId);
    return matchPlayersList;
  }
}
