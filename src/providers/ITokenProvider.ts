import { IManagerTokenPayload } from '../entities/IManager';

export interface ITokenGeneratorProvider {
  generate(data: IManagerTokenPayload): string
}
