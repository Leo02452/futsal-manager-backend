import CreateMatchPlayerController from '../../controllers/CreateMatchPlayerController';
import prismaModel from '../../database/prisma';
import { createMatchPlayerSchema }
  from '../../providers/implementations/zodValidator/schemas/MatchPlayer';
import MatchPlayerRepository from '../../repositories/implementations/MatchPlayerRepository';
import PlayerRepository from '../../repositories/implementations/PlayerRepository';
import CreateMatchPlayerService from '../../services/CreateMatchPlayerService';

export default class CreateMatchPlayerControllerFactory {
  static make() {
    const matchPlayerRepository = new MatchPlayerRepository(prismaModel.matchPlayer);
    const playerRepository = new PlayerRepository(prismaModel.player);
    const createMatchPlayerService = new CreateMatchPlayerService(
      matchPlayerRepository,
      playerRepository,
    );
    const createMatchPlayerController = new CreateMatchPlayerController(
      createMatchPlayerService,
      createMatchPlayerSchema,
    );

    return createMatchPlayerController;
  }
}
