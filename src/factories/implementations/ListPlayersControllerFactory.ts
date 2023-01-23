import ListPlayersController from '../../controllers/ListPlayersController';
import prismaModel from '../../database/prisma';
import PlayerRepository from '../../repositories/implementations/PlayerRepository';
import ListPlayersService from '../../services/ListPlayersService';

export default class ListPlayersControllerFactory {
  static make() {
    const playerRepository = new PlayerRepository(prismaModel.player);
    const listPlayersService = new ListPlayersService(
      playerRepository,
    );

    const listPlayersController = new ListPlayersController(
      listPlayersService,
    );

    return listPlayersController;
  }
}
