import { Request, Response, NextFunction } from 'express';

export function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('LOG: ', req.method, req.url, req.body);
  next();
};
