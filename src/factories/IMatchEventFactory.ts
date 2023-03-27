import MatchEvent from '../entities/implementations/MatchEvent';
import { ICreateMatchEventDTO } from '../providers/implementations/zodValidator/schemas/MatchEvent';

export interface IMatchEventFactory {
  make(matchEvent: ICreateMatchEventDTO): MatchEvent
}
