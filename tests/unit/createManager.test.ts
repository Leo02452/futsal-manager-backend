import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import Sinon from "sinon";
import { idHandler, passwordHandler } from "../../src/entities/Manager";
import TokenProvider from "../../src/providers/implementations/TokenProviderAdapter";
import ManagerRepository from "../../src/repositories/implementations/ManagerRepository";
import CreateManagerService from "../../src/services/CreateManagerService";
import { createManagerMock } from "../managerMock";

use(chaiAsPromised);

describe('Create Manager', () => {
  const managerRepository = new ManagerRepository();
  const tokenProvider = new TokenProvider();
  const createManagerService = new CreateManagerService(managerRepository, tokenProvider);
  
  afterEach(Sinon.restore);

  describe('On success', () => {
    it('should be return a token', () => {
      Sinon.stub(managerRepository, 'findByEmail').resolves(null);
      Sinon.stub(idHandler, 'generate').returns('any-valid-id');
      Sinon.stub(passwordHandler, 'encrypt').returns('any-valid-hashPassword');
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
      ).to.eventually.be.rejectedWith('User already registered');
    });

    it('should be rejected if save is rejected', () => {
      Sinon.stub(managerRepository, 'findByEmail').resolves(null);
      Sinon.stub(idHandler, 'generate').returns('any-valid-id');
      Sinon.stub(passwordHandler, 'encrypt').returns('any-valid-hashPassword');
      Sinon.stub(managerRepository, 'save').rejects();

      return expect(
        createManagerService.execute(createManagerMock.validBody)
      ).to.eventually.be.rejected;
    });

    it('should be rejected if tokenProvider throws', () => {
      Sinon.stub(managerRepository, 'findByEmail').resolves(null);
      Sinon.stub(idHandler, 'generate').returns('any-valid-id');
      Sinon.stub(passwordHandler, 'encrypt').returns('any-valid-hashPassword');
      Sinon.stub(managerRepository, 'save').resolves(createManagerMock.savedManager);
      Sinon.stub(tokenProvider, 'generate').throws();

      return expect(
        createManagerService.execute(createManagerMock.validBody)
      ).to.eventually.be.rejected;
    });
  });
});
