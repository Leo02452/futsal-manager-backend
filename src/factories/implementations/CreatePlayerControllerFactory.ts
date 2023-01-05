import CreatePlayerController from '../../controllers/CreatePlayerController';
import prismaModel from '../../database/prisma';
import { createPlayerSchema } from '../../providers/implementations/zodValidator/schemas/Player';
import PlayerRepository from '../../repositories/implementations/PlayerRepository';
import CreatePlayerService from '../../services/CreatePlayerService';
import PlayerFactory from './PlayerFactory';

export default class CreatePlayerControllerFactory {
  public static make() {
    const playerRepository = new PlayerRepository(prismaModel.player);
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
