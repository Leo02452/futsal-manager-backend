import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import sinon from "sinon";
import prismaModel from "../../src/database/prisma";
import MatchEventFactory from "../../src/factories/implementations/MatchEventFactory";
import MatchEventRepository from "../../src/repositories/implementations/MatchEventRepository";
import CreateMatchEventService from '../../src/services/CreateMatchEventService'
import { createMatchEventMock } from "../mocks/matchEventMock";

use(chaiAsPromised);

describe.only('Create Match Event Service', () => {
  const matchEventRepository = new MatchEventRepository(prismaModel.matchEvent);
  const matchEventFactory = new MatchEventFactory();
  const createdMatchEventService = new CreateMatchEventService(
    matchEventRepository,
    matchEventFactory,
  );

  afterEach(sinon.restore);
  describe('On Success', () => {
    it('should return created id', () => {
      sinon.stub(matchEventFactory, 'make').returns(createMatchEventMock.created);
      sinon.stub(matchEventRepository, 'save').resolves();

      return expect(
        createdMatchEventService.execute(createMatchEventMock.validDTO)
      ).to.eventually.be.equals(createMatchEventMock.created.id);
    });
  });
  describe('On Failure', () => {
    it('should be rejected if factory throws an error', () => {
      sinon.stub(matchEventFactory, 'make').throws();

      return expect(
        createdMatchEventService.execute(createMatchEventMock.validDTO)
      ).to.eventually.be.rejected;
    });

    it('should be rejected if matchEventRepository save is rejected', () => {
      sinon.stub(matchEventFactory, 'make').returns(createMatchEventMock.created);
      sinon.stub(matchEventRepository, 'save').rejects();

      return expect(
        createdMatchEventService.execute(createMatchEventMock.validDTO)
      ).to.eventually.be.rejected;
    });
  });
});