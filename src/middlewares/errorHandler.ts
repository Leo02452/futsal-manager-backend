import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import ConflictError from '../helpers/errors/ConflictError';

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ZodError) return res.status(400).json({ error: err.issues[0].message });
  if (err instanceof ConflictError) return res.status(409).json({ error: err.message });
  return res.status(500).json({ error: err.message });
};

export default errorHandler;
