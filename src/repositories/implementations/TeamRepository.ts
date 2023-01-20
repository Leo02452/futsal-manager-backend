import prismaModel from '../../database/prisma';
import { ICreatedTeam, ITeam } from '../../entities/ITeam';
import { ICreateTeamRepository, IFindTeamByIdRepository } from '../ITeamRepository';

export default class TeamRepository implements
ICreateTeamRepository,
IFindTeamByIdRepository {
  constructor(
    private _model: typeof prismaModel.team,
  ) { }

  async save(team: ITeam): Promise<void> {
    const players = team.players.map((player) => ({
      id: player.id,
      name: player.name,
    }));

    await this._model.create({
      data: {
        id: team.id,
        name: team.name,
        userId: team.userId,
        players: {
          create: players,
        },
      },
    });
  }

  async findById(id: string): Promise<ICreatedTeam | null> {
    const team = await this._model.findFirst({
      where: { id },
    });

    return team;
  }
}
