import { plainToInstance } from 'class-transformer';
import { validate as classValidator } from 'class-validator';
import { RequestHandler } from 'express';
import { BadRequestError } from '../error/errors';
 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validate = (type: any): RequestHandler => {
  return async (req, res, next) => {
    const errors = await classValidator(plainToInstance(type, req.body));
    if (errors.length > 0) {
      next(new BadRequestError(errors));
    } else {
      next();
    }
  };
};
