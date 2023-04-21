import UpdateMatchEventController from '../../controllers/UpdateMatchEventController';
import prismaModel from '../../database/prisma';
import { updateMatchEventSchema }
  from '../../providers/implementations/zodValidator/schemas/MatchEvent';
import MatchEventRepository from '../../repositories/implementations/MatchEventRepository';
import UpdateMatchEventService from '../../services/UpdateMatchEventService';

export default class UpdateMatchEventControllerFactory {
  static make() {
    const matchEventRepository = new MatchEventRepository(prismaModel.matchEvent);
    const updateMatchEventService = new UpdateMatchEventService(
      matchEventRepository,
    );

    const updateMatchEventController = new UpdateMatchEventController(
      updateMatchEventService,
      updateMatchEventSchema,
    );

    return updateMatchEventController;
  }
}
