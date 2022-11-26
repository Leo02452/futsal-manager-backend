export default class ConflictError extends Error {
  constructor(entity: string) {
    super(`${entity} already registered`);
    this.name = 'ConflictError';
  }
}
