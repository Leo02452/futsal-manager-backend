import IdProviderAdapter from '../../providers/implementations/IdProviderAdapter';
import { ICreateMatchDTO } from '../../providers/implementations/zodValidator/schemas/Match';

export const idHandler = new IdProviderAdapter();

export default class Match {
  id: string;
  date: string;
  local: string;
  teamId: string;
  opponent: string;

  constructor(props: ICreateMatchDTO, id?: string) {
    this.date = props.date;
    this.local = props.local;
    this.teamId = props.teamId;
    this.opponent = props.opponent;

    if (!id) {
      this.id = idHandler.generate();
    } else {
      this.id = id;
    }
  }
}
