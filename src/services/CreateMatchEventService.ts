import { IMatchEventToSave } from '../entities/IMatchEvent';
import { IMatchEventFactory } from '../factories/IMatchEventFactory';
import { ICreateMatchEventDTO } from '../providers/implementations/zodValidator/schemas/MatchEvent';
import { ICreateMatchEventRepository } from '../repositories/IMatchEventRepository';

export default class CreateMatchEventService {
  constructor(
    private _matchEventRepository: ICreateMatchEventRepository,
    private _matchEventFactory: IMatchEventFactory,
  ) { }

  async execute(data: ICreateMatchEventDTO): Promise<string> {
    const createdMatchEvent = this._matchEventFactory.make(data);
    const { eventId, eventPlayerId, matchId, assistPlayerId, ...localKeys } = createdMatchEvent;

    let dataToSave: IMatchEventToSave = {
      ...localKeys,
      event: { connect: { id: eventId } },
      eventPlayer: { connect: { id: eventPlayerId } },
      match: { connect: { id: matchId } },
    };

    if (createdMatchEvent.assistPlayerId) {
      dataToSave = { ...dataToSave, assistPlayer: { connect: { id: assistPlayerId } } };
    }

    await this._matchEventRepository.save(dataToSave);

    return createdMatchEvent.id;
  }
}
