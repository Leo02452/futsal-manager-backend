import { expect, use } from 'chai';
import chaiAsPromised from "chai-as-promised";
import sinon from 'sinon';
import PasswordProviderAdapter from '../../src/providers/implementations/PasswordProviderAdapter';
import TokenProviderAdapter from '../../src/providers/implementations/TokenProviderAdapter';
import ManagerRepository from '../../src/repositories/implementations/ManagerRepository';
import LoginService from '../../src/services/LoginService';
import { createManagerMock, loginMock } from '../mocks/managerMock';

use(chaiAsPromised);

describe('loginService', () => {
  const managerRepository = new ManagerRepository();
  const passwordProvider = new PasswordProviderAdapter();
  const tokenProvider = new TokenProviderAdapter();
  const loginService = new LoginService(
    managerRepository,
    passwordProvider,
    tokenProvider,
  ); 

  afterEach(sinon.restore);

  describe('On success', () => {
    it('should return a token', () => {
      sinon.stub(managerRepository, 'findByEmail').resolves(createManagerMock.registeredManager);
      sinon.stub(passwordProvider, 'validate').resolves(true);
      sinon.stub(tokenProvider, 'generate').returns('any-valid-token');

      return expect(
        loginService.execute(loginMock.validBody)
      ).to.eventually.be.equals('any-valid-token');
    });
  });
});