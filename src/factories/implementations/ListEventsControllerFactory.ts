import ListEventsController from '../../controllers/ListEventsController';
import prismaModel from '../../database/prisma';
import EventRepository from '../../repositories/implementations/EventRepository';
import ListEventsService from '../../services/ListEventsService';

export default class ListEventsControllerFactory {
  public static make() {
    const eventRepository = new EventRepository(prismaModel.event);
    const listEventsService = new ListEventsService(eventRepository);
    const listEventsController = new ListEventsController(listEventsService);

    return listEventsController;
  }
}
