import Manager from '../entities/Manager';
import ConflictError from '../helpers/errors/ConflictError';
import { createManagerDTO } from '../providers/implementations/zodValidator/schemas/CreateManager';
import { ITokenGeneratorProvider } from '../providers/ITokenProvider';
import { ICreateManagerRepository } from '../repositories/IManagerRepository';

export default class CreateManagerService {
  constructor(
    private _managerRepository: ICreateManagerRepository,
    private _tokenProvider: ITokenGeneratorProvider,
  ) { }

  async execute(data: createManagerDTO) {
    const managerAlreadyExists = await this._managerRepository.findByEmail(data.email);

    if (managerAlreadyExists) throw new ConflictError('User');

    const manager = new Manager(data);

    const managerWithoutPassword = await this._managerRepository.save(manager);

    const token = this._tokenProvider.generate(managerWithoutPassword);

    return token;
  }
}
