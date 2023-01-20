import Match from '../entities/implementations/Match';
import { ICreateMatchDTO } from '../providers/implementations/zodValidator/schemas/Match';

export interface IMatchFactory {
  make(match: ICreateMatchDTO): Match
}
