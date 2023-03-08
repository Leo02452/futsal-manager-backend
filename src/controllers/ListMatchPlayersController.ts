import ListMatchPlayersService from '../services/ListMatchPlayersService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';

export default class ListMatchPlayersController {
  constructor(
    private _listMatchPlayersService: ListMatchPlayersService,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { matchId } = httpRequest.query as IHttpRequest & { matchId: string };
    const matchPlayersList = await this._listMatchPlayersService.execute(matchId);

    return { status: 200, body: matchPlayersList };
  }
}
