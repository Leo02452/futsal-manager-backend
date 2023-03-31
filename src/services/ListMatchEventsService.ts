import { ICreatedMatchEvent } from '../entities/IMatchEvent';
import { IFindMatchEventsRepository } from '../repositories/IMatchEventRepository';

export default class ListMatchEventsService {
  constructor(
    private _matchEventRepository: IFindMatchEventsRepository,
  ) { }

  async execute(matchId: string, game: string): Promise<ICreatedMatchEvent[]> {
    const matchEventsList = await this._matchEventRepository.getAll(matchId, game);
    return matchEventsList;
  }
}
