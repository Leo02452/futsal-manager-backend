import * as jwt from 'jsonwebtoken';
import { IManagerTokenPayload } from '../../entities/IManager';
import { ITokenGeneratorProvider } from '../ITokenProvider';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'my_secret';

export default class TokenProviderAdapter implements ITokenGeneratorProvider {
  private _tokenHandler;
  private _secret: string;
  private _signOptions: jwt.SignOptions;

  constructor() {
    this._tokenHandler = jwt;
    this._secret = secret;
    this._signOptions = { expiresIn: '7d', algorithm: 'HS256' };
  }

  generate(manager: IManagerTokenPayload): string {
    const token = this._tokenHandler.sign(manager, this._secret, this._signOptions);
    return token;
  }
}
