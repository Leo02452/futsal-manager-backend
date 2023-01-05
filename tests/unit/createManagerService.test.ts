import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import Sinon from "sinon";
import ManagerFactory from "../../src/factories/ManagerFactory";
import TokenProvider from "../../src/providers/implementations/TokenProviderAdapter";
import ManagerRepository from "../../src/repositories/implementations/ManagerRepository";
import CreateManagerService from "../../src/services/CreateManagerService";
import { createManagerMock } from "../mocks/managerMock";

use(chaiAsPromised);

describe('Create Manager', () => {
  const managerRepository = new ManagerRepository();
  const tokenProvider = new TokenProvider();
  const managerFactory = new ManagerFactory();
  const createManagerService = new CreateManagerService(
    managerRepository,
    tokenProvider,
    managerFactory,
  );
  
  afterEach(Sinon.restore);

  describe('On success', () => {
    it('should return a token', () => {
      Sinon.stub(managerRepository, 'findByEmail').resolves(null);
      Sinon.stub(managerFactory, 'make').returns(createManagerMock.registeredManager);
      Sinon.stub(managerRepository, 'save').resolves(createManagerMock.savedManager);
      Sinon.stub(tokenProvider, 'generate').returns('any-valid-token');

      return expect(
        createManagerService.execute(createManagerMock.validBody)
      ).to.eventually.be.equals('any-valid-token');
    });
  });

  describe('On failure', () => {
    it('should be rejected if findByEmail is rejected', () => {
      Sinon.stub(managerRepository, 'findByEmail').rejects();

      return expect(
        createManagerService.execute(createManagerMock.validBody)
      ).to.eventually.be.rejected;
    });

    it('should be rejected if email is already registered', () => {
      Sinon.stub(managerRepository, 'findByEmail').resolves(createManagerMock.registeredManager);

      return expect(
        createManagerService.execute(createManagerMock.validBody)
      ).to.eventually.be.rejectedWith('Usuário já cadastrado.');
    });

    it('should be rejected if factory make is rejected', () => {
      Sinon.stub(managerRepository, 'findByEmail').resolves(null);
      Sinon.stub(managerFactory, 'make').throws();

      return expect(
        createManagerService.execute(createManagerMock.validBody)
      ).to.eventually.be.rejected;
    });

    it('should be rejected if save is rejected', () => {
      Sinon.stub(managerRepository, 'findByEmail').resolves(null);
      Sinon.stub(managerFactory, 'make').returns(createManagerMock.registeredManager);
      Sinon.stub(managerRepository, 'save').rejects();

      return expect(
        createManagerService.execute(createManagerMock.validBody)
      ).to.eventually.be.rejected;
    });

    it('should be rejected if tokenProvider throws', () => {
      Sinon.stub(managerRepository, 'findByEmail').resolves(null);
      Sinon.stub(managerFactory, 'make').returns(createManagerMock.registeredManager);
      Sinon.stub(managerRepository, 'save').resolves(createManagerMock.savedManager);
      Sinon.stub(tokenProvider, 'generate').throws();

      return expect(
        createManagerService.execute(createManagerMock.validBody)
      ).to.eventually.be.rejected;
    });
  });
});
