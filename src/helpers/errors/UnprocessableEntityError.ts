export default class UnprocessableEntityError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnprocessableEntityError';
  }
}
