import { ICreateTeamDTO } from '../providers/implementations/zodValidator/schemas/Team';
import CreateTeamService from '../services/CreateTeamService';
import { IHttpRequest, IHttpResponse } from './protocols/IHttp';
import { IRequestValidator } from './protocols/IRequestValidator';

export default class CreateTeamController {
  constructor(
    private createTeamService: CreateTeamService,
    private _bodyValidator: IRequestValidator,
  ) { }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const dto = await this._bodyValidator.parseAsync(httpRequest.body) as ICreateTeamDTO;

    await this.createTeamService.execute(dto);

    return { status: 201, body: { message: 'Team registered!' } };
  }
}
