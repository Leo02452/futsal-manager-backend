import IdProviderAdapter from '../../providers/implementations/IdProviderAdapter';
import { ICreateTeamDTO } from '../../providers/implementations/zodValidator/schemas/Team';

export const idHandler = new IdProviderAdapter();

export default class Team {
  public id: string;
  public name: string;
  public userId: string;

  constructor(props: Omit<ICreateTeamDTO, 'players'>, id?: string) {
    this.name = props.name;
    this.userId = props.userId;

    if (!id) {
      this.id = idHandler.generate();
    } else {
      this.id = id;
    }
  }
}
