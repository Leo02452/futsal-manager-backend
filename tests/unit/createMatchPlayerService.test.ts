import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import sinon from "sinon";
import prismaModel from "../../src/database/prisma";
import { NotFoundError } from "../../src/helpers/errors";
import MatchPlayerRepository from "../../src/repositories/implementations/MatchPlayerRepository";
import PlayerRepository from "../../src/repositories/implementations/PlayerRepository";
import CreateMatchPlayerService from "../../src/services/CreateMatchPlayerService";
import { createMatchPlayerMock } from "../mocks/matchPlayerMock";

use(chaiAsPromised);

describe('Create Match Player Service', () => {
  const matchPlayerRepository = new MatchPlayerRepository(prismaModel.matchPlayer);
  const playerRepository = new PlayerRepository(prismaModel.player);
  const createMatchPlayerService = new CreateMatchPlayerService(
    matchPlayerRepository,
    playerRepository,
  );

  afterEach(sinon.restore);
  describe('On Success', () => {
    it('should return nothing', () => {
      sinon.stub(playerRepository, 'findByParam').resolves();
      sinon.stub(matchPlayerRepository, 'save').resolves();

      return expect(
        createMatchPlayerService.execute(createMatchPlayerMock.validDTO)
      ).to.eventually.be.equals(undefined);
    });

    it('should not be rejected', () => {
      sinon.stub(playerRepository, 'findByParam').resolves();
      sinon.stub(matchPlayerRepository, 'save').resolves();

      return expect(
        createMatchPlayerService.execute(createMatchPlayerMock.validDTO)
      ).to.not.eventually.be.rejected;
    });
  });

  describe('On failure', () => {
    it('should be rejected if player id is not found', () => {
      sinon.stub(playerRepository, 'findByParam').throws(new NotFoundError('Jogador'));

      return expect(
        createMatchPlayerService.execute(createMatchPlayerMock.validDTO)
      ).to.eventually.be.rejectedWith('Jogador não encontrado');
    });

    it('should be rejected if matchPlayerRepository save is rejected', () => {
      sinon.stub(playerRepository, 'findByParam').resolves();
      sinon.stub(matchPlayerRepository, 'save').rejects();

      return expect(
        createMatchPlayerService.execute(createMatchPlayerMock.validDTO)
      ).to.eventually.be.rejected;
    });
  });
});