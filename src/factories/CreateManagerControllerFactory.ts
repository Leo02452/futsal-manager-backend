import CreateManagerController from '../controllers/CreateManagerController';
import TokenProvider from '../providers/implementations/TokenProviderAdapter';
import {
  createManagerSchema,
} from '../providers/implementations/zodValidator/schemas/CreateManager';
import ManagerRepository from '../repositories/implementations/ManagerRepository';
import CreateManagerService from '../services/CreateManagerService';

export default class CreateManagerControllerFactory {
  public static make() {
    const managerRepository = new ManagerRepository();
    const tokenProvider = new TokenProvider();
    const createManagerService = new CreateManagerService(
      managerRepository,
      tokenProvider,
    );
    const createManagerController = new CreateManagerController(
      createManagerService,
      createManagerSchema,
    );

    return createManagerController;
  }
}
