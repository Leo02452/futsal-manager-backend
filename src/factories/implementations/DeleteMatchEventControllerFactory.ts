import DeleteMatchEventController from '../../controllers/DeleteMatchEventController';
import prismaModel from '../../database/prisma';
import MatchEventRepository from '../../repositories/implementations/MatchEventRepository';
import DeleteMatchEventService from '../../services/DeleteMatchEventService';

export default class DeleteMatchEventControllerFactory {
  static make() {
    const matchEventRepository = new MatchEventRepository(prismaModel.matchEvent);
    const deleteMatchEventService = new DeleteMatchEventService(
      matchEventRepository,
    );

    const deleteMatchEventController = new DeleteMatchEventController(
      deleteMatchEventService,
    );

    return deleteMatchEventController;
  }
}
