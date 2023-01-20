import { ICreatedTeam, ITeam } from '../entities/ITeam';

export interface IFindTeamByIdRepository {
  findById(id: string): Promise<ICreatedTeam | null>
}

export interface ICreateTeamRepository {
  save(team: ITeam): Promise<void>
}
