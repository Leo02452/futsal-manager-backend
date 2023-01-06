export default class ConflictError extends Error {
  constructor(entity: string) {
    super(`${entity} já cadastrado.`);
    this.name = 'ConflictError';
  }
}
