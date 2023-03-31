import ListMatchEventsController from '../../controllers/ListMatchEventsController';
import prismaModel from '../../database/prisma';
import MatchEventRepository from '../../repositories/implementations/MatchEventRepository';
import ListMatchEventsService from '../../services/ListMatchEventsService';

export default class ListMatchEventsControllerFactory {
  static make() {
    const matchEventRepository = new MatchEventRepository(prismaModel.matchEvent);
    const listMatchEventsService = new ListMatchEventsService(
      matchEventRepository,
    );

    const listMatchEventsController = new ListMatchEventsController(
      listMatchEventsService,
    );

    return listMatchEventsController;
  }
}
