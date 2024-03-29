import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import {
  ConflictError,
  UnauthorizedError,
  UnprocessableEntityError,
  NotFoundError,
} from '../helpers/errors';

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ZodError) return res.status(400).json({ error: err.issues[0].message });
  if (err instanceof UnauthorizedError) return res.status(401).json({ error: err.message });
  if (err instanceof NotFoundError) return res.status(404).json({ error: err.message });
  if (err instanceof ConflictError) return res.status(409).json({ error: err.message });
  if (err instanceof UnprocessableEntityError) return res.status(422).json({ error: err.message });
  return res.status(500).json({ error: err.message });
};

export default errorHandler;
