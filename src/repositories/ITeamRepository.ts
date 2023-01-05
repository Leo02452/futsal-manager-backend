import { ITeam } from '../entities/ITeam';

export interface ICreateTeamRepository {
  save(team: ITeam): Promise<void>
}
