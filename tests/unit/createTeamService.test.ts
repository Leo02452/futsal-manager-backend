import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import sinon from "sinon";
import prismaModel from "../../src/database/prisma";
import PlayerFactory from "../../src/factories/implementations/PlayerFactory";
import TeamFactory from "../../src/factories/implementations/TeamFactory";
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

  });
});