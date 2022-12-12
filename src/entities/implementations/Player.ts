import UnprocessableEntityError from '../../helpers/errors/UnprocessableEntityError';
import IdProviderAdapter from '../../providers/implementations/IdProviderAdapter';
import { ICreatePlayerDTO } from '../../providers/implementations/zodValidator/schemas/Player';

export const idHandler = new IdProviderAdapter();

export default class Player {
  id: string;
  name: string;
  teamId: string;

  constructor(props: ICreatePlayerDTO, id?: string) {
    this.teamId = props.teamId;

    if (props.name.length < 3) {
      throw new UnprocessableEntityError(
        'player\'s name length must be at least 3 characters long',
      );
    } else {
      this.name = props.name;
    }

    if (!id) {
      this.id = idHandler.generate();
    } else {
      this.id = id;
    }
  }
}
