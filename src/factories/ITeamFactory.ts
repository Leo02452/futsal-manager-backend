import Team from '../entities/implementations/Team';
import { ICreateTeamDTO } from '../providers/implementations/zodValidator/schemas/Team';

export interface ITeamFactory {
  make(team: Omit<ICreateTeamDTO, 'players'>): Team
}
