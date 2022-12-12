/* eslint-disable class-methods-use-this */
import Player from '../../entities/implementations/Player';
import { ICreatePlayerDTO } from '../../providers/implementations/zodValidator/schemas/Player';
import { IPlayerFactory } from '../IPlayerFactory';

export default class PlayerFactory implements IPlayerFactory {
  make(player: ICreatePlayerDTO): Player {
    return new Player(player);
  }
}
