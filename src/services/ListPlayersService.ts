import { IPlayer } from '../entities/IPlayer';
import { IListPlayersRepository } from '../repositories/IPlayerRepository';

export default class ListPlayersService {
  constructor(
    private _playerRepository: IListPlayersRepository,
  ) { }

  async execute(teamId: string): Promise<IPlayer[]> {
    const playersList = this._playerRepository.getAll(teamId);
    return playersList;
  }
}
