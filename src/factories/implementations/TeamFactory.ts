/* eslint-disable class-methods-use-this */
import Team from '../../entities/implementations/Team';
import { ICreateTeamDTO } from '../../providers/implementations/zodValidator/schemas/Team';
import { ITeamFactory } from '../ITeamFactory';

export default class TeamFactory implements ITeamFactory {
  make(team: Omit<ICreateTeamDTO, 'players'>): Team {
    return new Team(team);
  }
}
