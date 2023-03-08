import ListMatchPlayersController from '../../controllers/ListMatchPlayersController';
import prismaModel from '../../database/prisma';
import MatchPlayerRepository from '../../repositories/implementations/MatchPlayerRepository';
import ListMatchPlayersService from '../../services/ListMatchPlayersService';

export default class ListMatchPlayersControllerFactory {
  static make() {
    const matchPlayerRepository = new MatchPlayerRepository(prismaModel.matchPlayer);
    const listMatchPlayersService = new ListMatchPlayersService(
      matchPlayerRepository,
    );

    const listMatchPlayersController = new ListMatchPlayersController(
      listMatchPlayersService,
    );

    return listMatchPlayersController;
  }
}
