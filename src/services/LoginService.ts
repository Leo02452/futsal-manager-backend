import { UnauthorizedError } from '../helpers/errors';
import { loginDTO } from '../providers/implementations/zodValidator/schemas/Login';
import { IPasswordValidatorProvider } from '../providers/IPasswordProvider';
import { ITokenGeneratorProvider } from '../providers/ITokenProvider';
import { IFindManagerByEmail } from '../repositories/IManagerRepository';

export default class LoginService {
  constructor(
    private _managerRepository: IFindManagerByEmail,
    private _passwordProvider: IPasswordValidatorProvider,
    private _tokenProvider: ITokenGeneratorProvider,
  ) { }

  async execute(data: loginDTO): Promise<string> {
    const user = await this._managerRepository.findByEmail(data.email);

    if (!user) throw new UnauthorizedError('Email ou senha incorretos.');

    const isCorrectPassword = await this._passwordProvider.validate(data.password, user.password);

    if (!isCorrectPassword) throw new UnauthorizedError('Email ou senha incorretos.');

    const { password, createdAt, updatedAt, ...userWithoutPassword } = user;

    const token = this._tokenProvider.generate(userWithoutPassword);

    return token;
  }
}
