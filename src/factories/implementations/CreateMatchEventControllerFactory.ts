import CreateMatchEventController from '../../controllers/CreateMatchEventController';
import prismaModel from '../../database/prisma';
import { createMatchEventSchema }
  from '../../providers/implementations/zodValidator/schemas/MatchEvent';
import MatchEventRepository from '../../repositories/implementations/MatchEventRepository';
import CreateMatchEventService from '../../services/CreateMatchEventService';
import MatchEventFactory from './MatchEventFactory';

export default class CreateMatchEventControllerFactory {
  static make() {
    const matchEventRepository = new MatchEventRepository(prismaModel.matchEvent);
    const matchEventFactory = new MatchEventFactory();

    const createMatchEventService = new CreateMatchEventService(
      matchEventRepository,
      matchEventFactory,
    );

    const createMatchEventController = new CreateMatchEventController(
      createMatchEventService,
      createMatchEventSchema,
    );

    return createMatchEventController;
  }
}
