import { NotFoundError } from '../helpers/errors';
import { IFindPlayerRepository } from '../repositories/IPlayerRepository';

export default class FindPlayerByParamService {
  constructor(
    private playerRepository: IFindPlayerRepository,
  ) { }

  async execute(param: string, value: string) {
    const foundPlayer = await this.playerRepository.findByParam(param, value);

    if (!foundPlayer) throw new NotFoundError('Jogador');

    return foundPlayer;
  }
}
