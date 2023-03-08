import { ICreateMatchPlayerDTO }
  from '../providers/implementations/zodValidator/schemas/MatchPlayer';
import CreateMatchPlayerService from '../services/CreateMatchPlayerService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';
import { IRequestValidator } from './protocols/IRequestValidator';

export default class CreateMatchPlayersController {
  constructor(
    private _createMatchPlayerService: CreateMatchPlayerService,
    private _bodyValidator: IRequestValidator,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const dto = await this._bodyValidator.parseAsync(httpRequest.body) as ICreateMatchPlayerDTO;
    await this._createMatchPlayerService.execute(dto);
    return { status: 201, body: { message: 'Jogadores escalados com sucesso!' } };
  }
}
