export interface IRequestValidator {
  parseAsync(data: unknown): Promise<unknown>
}
