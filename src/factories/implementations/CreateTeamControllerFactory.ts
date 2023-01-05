import CreateTeamController from '../../controllers/CreateTeamController';
import prismaModel from '../../database/prisma';
import { createTeamSchema } from '../../providers/implementations/zodValidator/schemas/Team';
import TeamRepository from '../../repositories/implementations/TeamRepository';
import CreateTeamService from '../../services/CreateTeamService';
import PlayerFactory from './PlayerFactory';
import TeamFactory from './TeamFactory';

export default class CreateTeamControllerFactory {
  public static make() {
    const teamRepository = new TeamRepository(prismaModel.team);
    const playerFactory = new PlayerFactory();
    const teamFactory = new TeamFactory();

    const createTeamService = new CreateTeamService(
      teamRepository,
      playerFactory,
      teamFactory,
    );

    const createTeamController = new CreateTeamController(
      createTeamService,
      createTeamSchema,
    );

    return createTeamController;
  }
}
