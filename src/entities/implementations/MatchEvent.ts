import IdProviderAdapter from '../../providers/implementations/IdProviderAdapter';
import { ICreateMatchEventDTO }
  from '../../providers/implementations/zodValidator/schemas/MatchEvent';

export const idHandler = new IdProviderAdapter();

export default class MatchEvent {
  id: string;
  eventId: string;
  eventPlayerId: string;
  matchId: string;
  hasAssist: boolean;
  assistPlayerId: string | undefined;
  game: string;

  constructor(props: ICreateMatchEventDTO, id?: string) {
    this.eventId = props.eventId;
    this.eventPlayerId = props.eventPlayerId;
    this.matchId = props.matchId;
    this.hasAssist = props.hasAssist;
    this.game = props.game;

    if (!id) {
      this.id = idHandler.generate();
    } else {
      this.id = id;
    }

    if (props.assistPlayerId) {
      this.assistPlayerId = props.assistPlayerId;
    } else {
      this.assistPlayerId = undefined;
    }
  }
}
