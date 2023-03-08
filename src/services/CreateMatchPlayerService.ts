import { ICreateMatchPlayerDTO }
  from '../providers/implementations/zodValidator/schemas/MatchPlayer';
import { ICreateMatchPlayerRepository } from '../repositories/IMatchPlayerRepository';
import { IFindPlayerRepository } from '../repositories/IPlayerRepository';

export default class CreateMatchPlayerService {
  constructor(
    private _createMatchPlayerRepository: ICreateMatchPlayerRepository,
    private _playerRepository: IFindPlayerRepository,
  ) { }

  async execute(data: ICreateMatchPlayerDTO) {
    const matchPlayersList = data.playersIdList
      .map((playerId) => ({
        matchId: data.matchId,
        playerId,
      }));

    const playersListPromise = data.playersIdList.map((playerId) => this
      ._playerRepository.findByParam('id', playerId));

    await Promise.all(playersListPromise);

    await this._createMatchPlayerRepository.save(matchPlayersList);
  }
}
