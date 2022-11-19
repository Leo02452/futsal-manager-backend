import * as uuid from 'uuid';
import { IIdGeneratorProvider } from '../IIdProvider';

export default class IdProviderAdapter implements IIdGeneratorProvider {
  private _idHandler: typeof uuid;

  constructor() {
    this._idHandler = uuid;
  }

  generate(): string {
    return this._idHandler.v4();
  }
}
