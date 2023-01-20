/* eslint-disable class-methods-use-this */
import Match from '../../entities/implementations/Match';
import { ICreateMatchDTO } from '../../providers/implementations/zodValidator/schemas/Match';
import { IMatchFactory } from '../IMatchFactory';

export default class MatchFactory implements IMatchFactory {
  make(match: ICreateMatchDTO): Match {
    return new Match(match);
  }
}
