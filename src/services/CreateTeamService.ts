import { IPlayerFactory } from '../factories/IPlayerFactory';
import { ITeamFactory } from '../factories/ITeamFactory';
import { ICreateTeamDTO } from '../providers/implementations/zodValidator/schemas/Team';
import { ICreateTeamRepository } from '../repositories/ITeamRepository';

export default class CreateTeamService {
  constructor(
    private _teamRepository: ICreateTeamRepository,
    private _playerFactory: IPlayerFactory,
    private _teamFactory: ITeamFactory,
  ) { }

  async execute(data: ICreateTeamDTO): Promise<void> {
    const team = this._teamFactory.make({
      name: data.name,
      userId: data.userId,
    });

    const players = data.players
      .map((player) => this._playerFactory.make({ name: player, teamId: '' }));

    const teamToSave = { ...team, players };

    await this._teamRepository.save(teamToSave);
  }
}
