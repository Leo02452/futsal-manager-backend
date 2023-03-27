import { ICreateMatchEventDTO } from '../providers/implementations/zodValidator/schemas/MatchEvent';
import CreateMatchEventService from '../services/CreateMatchEventService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';
import { IRequestValidator } from './protocols/IRequestValidator';

export default class CreateMatchEventController {
  constructor(
    private _createMatchEventService: CreateMatchEventService,
    private _bodyValidator: IRequestValidator,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const dto = await this._bodyValidator.parseAsync(httpRequest.body) as ICreateMatchEventDTO;
    const matchEventId = await this._createMatchEventService.execute(dto);
    return { status: 201, body: { id: matchEventId } };
  }
}
