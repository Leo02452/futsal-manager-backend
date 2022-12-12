import CreatePlayerController from '../../controllers/CreatePlayerController';
import { createPlayerSchema } from '../../providers/implementations/zodValidator/schemas/Player';
import PlayerRepository from '../../repositories/implementations/PlayerRepository';
import CreatePlayerService from '../../services/CreatePlayerService';
import PlayerFactory from './PlayerFactory';

export default class CreatePlayerControllerFactory {
  public static make() {
    const playerRepository = new PlayerRepository();
    const playerFactory = new PlayerFactory();

    const createPlayerService = new CreatePlayerService(
      playerRepository,
      playerFactory,
    );

    const createPlayerController = new CreatePlayerController(
      createPlayerService,
      createPlayerSchema,
    );

    return createPlayerController;
  }
}
