import Player from '../entities/implementations/Player';
import { ICreatePlayerDTO } from '../providers/implementations/zodValidator/schemas/Player';

export interface IPlayerFactory {
  make(player: ICreatePlayerDTO): Player
}
