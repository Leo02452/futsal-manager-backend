import { IUpdateMatchEventDTO } from '../providers/implementations/zodValidator/schemas/MatchEvent';
import { IUpdateMatchEventRepository } from '../repositories/IMatchEventRepository';

export default class UpdateMatchEventService {
  constructor(
    private _matchEventRepository: IUpdateMatchEventRepository,
  ) { }

  async execute(id: string, dto: IUpdateMatchEventDTO): Promise<void> {
    await this._matchEventRepository.update(id, dto);
  }
}
