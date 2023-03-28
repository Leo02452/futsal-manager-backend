/* eslint-disable class-methods-use-this */
import MatchEvent from '../../entities/implementations/MatchEvent';
import { ICreateMatchEventDTO }
  from '../../providers/implementations/zodValidator/schemas/MatchEvent';
import { IMatchEventFactory } from '../IMatchEventFactory';

export default class MatchEventFactory implements IMatchEventFactory {
  make(matchEvent: ICreateMatchEventDTO): MatchEvent {
    return new MatchEvent(matchEvent);
  }
}
