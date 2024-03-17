import {NextFunction, Request, Response} from 'express';
import {verify as verifyJWT} from 'jsonwebtoken';
import {
  InternalErrorResponse,
  NotFoundResponse,
  UnauthorizedResponse,
} from './../util/apiResponse';
import {jwtSecret} from '../config';
type ExpressMiddleware = (
  req: Request,
  res: Response,
  next?: NextFunction
) => Promise<unknown>;

export const handleUserSession = (_asyncRouteHandler?: ExpressMiddleware) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<unknown> => {
    // const taskName = 'HANDLE_USER_SESSION';
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) return new NotFoundResponse(res, 'Token Not Found').send();
      const verifyUser = verifyJWT(token, jwtSecret);
      if (!verifyUser)
        return new UnauthorizedResponse(res, 'Token Expired/Invalid');
      req.user = verifyUser;
      return next();
    } catch (error) {
      const response = new InternalErrorResponse(res, 'Some error occurred');
      return response.send();
    }
  };
};
