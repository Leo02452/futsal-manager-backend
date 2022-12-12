import { IPlayerFactory } from '../factories/IPlayerFactory';
import ConflictError from '../helpers/errors/ConflictError';
import { ICreatePlayerDTO } from '../providers/implementations/zodValidator/schemas/Player';
import { ICreatePlayerRepository } from '../repositories/IPlayerRepository';

export default class CreatePlayerService {
  constructor(
    private _playerRepository: ICreatePlayerRepository,
    private _playerFactory: IPlayerFactory,
  ) { }

  async execute(data: ICreatePlayerDTO): Promise<void> {
    const playerAlreadyExists = await this._playerRepository.findByName(data.name, data.teamId);

    if (playerAlreadyExists) throw new ConflictError('Player');

    const player = this._playerFactory.make(data);

    await this._playerRepository.save(player);
  }
}
