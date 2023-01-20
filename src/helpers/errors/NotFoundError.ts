export default class NotFoundError extends Error {
  constructor(entity: string) {
    super(`${entity} não encontrado`);
    this.name = 'NotFoundError';
  }
}
