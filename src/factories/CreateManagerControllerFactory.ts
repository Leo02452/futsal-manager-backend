import CreateManagerController from '../controllers/CreateManagerController';
import TokenProvider from '../providers/implementations/TokenProviderAdapter';
import {
  createManagerSchema,
} from '../providers/implementations/zodValidator/schemas/CreateManager';
import ManagerRepository from '../repositories/implementations/ManagerRepository';
import CreateManagerService from '../services/CreateManagerService';
import ManagerFactory from './ManagerFactory';

export default class CreateManagerControllerFactory {
  public static make() {
    const managerRepository = new ManagerRepository();
    const tokenProvider = new TokenProvider();
    const managerFactory = new ManagerFactory();

    const createManagerService = new CreateManagerService(
      managerRepository,
      tokenProvider,
      managerFactory,
    );

    const createManagerController = new CreateManagerController(
      createManagerService,
      createManagerSchema,
    );

    return createManagerController;
  }
}
