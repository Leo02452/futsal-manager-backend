import { IUpdateMatchEventDTO } from '../providers/implementations/zodValidator/schemas/MatchEvent';
import UpdateMatchEventService from '../services/UpdateMatchEventService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';
import { IRequestValidator } from './protocols/IRequestValidator';

export default class UpdateMatchEventController {
  constructor(
    private _updateMatchEventService: UpdateMatchEventService,
    private _bodyValidator: IRequestValidator,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const dto = await this._bodyValidator.parseAsync(httpRequest.body) as IUpdateMatchEventDTO;
    const { id } = httpRequest.params as { id: string };
    await this._updateMatchEventService.execute(id, dto);
    return { status: 204, body: { message: 'Evento atualizado com sucesso!' } };
  }
}
