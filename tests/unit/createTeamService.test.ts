import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import sinon from "sinon";
import prismaModel from "../../src/database/prisma";
import PlayerFactory from "../../src/factories/implementations/PlayerFactory";
import TeamFactory from "../../src/factories/implementations/TeamFactory";
import { UnprocessableEntityError } from "../../src/helpers/errors";
import TeamRepository from "../../src/repositories/implementations/TeamRepository";
import CreateTeamService from "../../src/services/CreateTeamService";
import { teamMock } from "../mocks/teamMock";

use(chaiAsPromised);

describe('Create Team Service', () => {
  const teamRepository = new TeamRepository(prismaModel.team);
  const playerFactory = new PlayerFactory();
  const teamFactory = new TeamFactory();
  const createTeamService = new CreateTeamService(
    teamRepository,
    playerFactory,
    teamFactory,
  );

  afterEach(sinon.restore);
  describe('On success', () => {
    it('should return nothing', () => {
      sinon.stub(teamFactory, 'make').returns(teamMock.createdTeam);
      sinon.stub(playerFactory, 'make').returns(teamMock.createdPlayers);
      sinon.stub(teamRepository, 'save').resolves();

      return expect(
        createTeamService.execute(teamMock.validBody)
      ).to.eventually.be.equals(undefined);
    });

    it('should not be rejected', () => {
      sinon.stub(teamFactory, 'make').returns(teamMock.createdTeam);
      sinon.stub(playerFactory, 'make').returns(teamMock.createdPlayers);
      sinon.stub(teamRepository, 'save').resolves();

      return expect(
        createTeamService.execute(teamMock.validBody)
      ).to.not.eventually.be.rejected;
    });
  });

  describe('On failure', () => {
    it('should be rejected if teamFactory make fails', () => {
      sinon.stub(teamFactory, 'make').throws();

      return expect(
        createTeamService.execute(teamMock.validBody)
      ).to.eventually.be.rejected;
    });

    it('should be rejected if a players name length is less than 3 characters', () => {
      sinon.stub(teamFactory, 'make').returns(teamMock.createdTeam);
      sinon.stub(playerFactory, 'make').throws(new UnprocessableEntityError(
        'player\'s name length must be at least 3 characters long'
      ));

      return expect(
        createTeamService.execute(teamMock.validBody)
      ).to.eventually.be.rejectedWith(UnprocessableEntityError);
    });

    it('should be rejected if playerFactory make fails for other reason', () => {
      sinon.stub(teamFactory, 'make').returns(teamMock.createdTeam);
      sinon.stub(playerFactory, 'make').throws();

      return expect(
        createTeamService.execute(teamMock.validBody)
      ).to.eventually.be.rejected;
    });

    it('should be rejected if teamRepository save fails', () => {
      sinon.stub(teamFactory, 'make').returns(teamMock.createdTeam);
      sinon.stub(playerFactory, 'make').returns(teamMock.createdPlayers);
      sinon.stub(teamRepository, 'save').rejects();

      return expect(
        createTeamService.execute(teamMock.validBody)
      ).to.eventually.be.rejected;
    });
  });
});
