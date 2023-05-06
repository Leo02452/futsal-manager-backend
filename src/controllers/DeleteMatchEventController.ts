import DeleteMatchEventService from '../services/DeleteMatchEventService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';

export default class DeleteMatchEventController {
  constructor(
    private _deleteMatchEventService: DeleteMatchEventService,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { id } = httpRequest.params as { id: string };
    await this._deleteMatchEventService.execute(id);
    return { status: 204, body: { message: 'Evento deletado com sucesso!' } };
  }
}
