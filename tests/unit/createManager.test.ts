import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import Sinon from "sinon";
import { idHandler, passwordHandler } from "../../src/entities/Manager";
import JwtTokenProvider from "../../src/providers/implementations/JwtTokenProvider";
import PrismaManagerRepository from "../../src/repositories/implementations/PrismaUserRepository";
import CreateManagerService from "../../src/services/CreateManagerService";
import { createManagerMock } from "../managerMock";

use(chaiAsPromised);

describe('Create Manager', () => {
  const managerRepository = new PrismaManagerRepository();
  const tokenProvider = new JwtTokenProvider();
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
});
