import ListMatchesController from '../../controllers/ListMatchesController';
import prismaModel from '../../database/prisma';
import MatchRepository from '../../repositories/implementations/MatchRepository';
import ListMatchesService from '../../services/ListMatchesService';

export default class ListMatchesControllerFactory {
  static make() {
    const matchRepository = new MatchRepository(prismaModel.match);
    const listMatchesService = new ListMatchesService(
      matchRepository,
    );

    const listMatchesController = new ListMatchesController(
      listMatchesService,
    );

    return listMatchesController;
  }
}
