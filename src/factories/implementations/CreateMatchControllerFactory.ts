import CreateMatchController from '../../controllers/CreateMatchController';
import prismaModel from '../../database/prisma';
import { createMatchSchema } from '../../providers/implementations/zodValidator/schemas/Match';
import MatchRepository from '../../repositories/implementations/MatchRepository';
import TeamRepository from '../../repositories/implementations/TeamRepository';
import CreateMatchService from '../../services/CreateMatchService';
import MatchFactory from './MatchFactory';

export default class CreateMatchControllerFactory {
  public static make() {
    const teamRepository = new TeamRepository(prismaModel.team);
    const matchRepository = new MatchRepository(prismaModel.match);
    const matchFactory = new MatchFactory();

    const createMatchService = new CreateMatchService(
      teamRepository,
      matchRepository,
      matchFactory,
    );

    const createMatchController = new CreateMatchController(
      createMatchService,
      createMatchSchema,
    );

    return createMatchController;
  }
}
