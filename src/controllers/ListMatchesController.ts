import ListMatchesService from '../services/ListMatchesService';
import { IHttpResponse } from './protocols/IHttp';

export default class ListMatchesController {
  constructor(
    private _listMatchesService: ListMatchesService,
  ) { }

  async handle(): Promise<IHttpResponse> {
    const matchesList = await this._listMatchesService.execute();

    return { status: 200, body: matchesList };
  }
}
