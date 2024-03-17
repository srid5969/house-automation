import {Request, Response} from 'express';
import {InternalErrorResponse, SuccessResponse} from '../../util/apiResponse';
import {AppError} from '../../util/app-error';
import {ResponseMsg} from '../../util/enum';
import {UsersRepository} from './../../repositories/user.repository';
import {UsersSubscriptionRepository} from '../../repositories/user-subscription.repository';

export class UserController {
  private static service = new UsersRepository();
  static async getAll(req: Request, res: Response) {
    try {
      const data = await UserController.service.getAll();
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async getById(req: Request, res: Response) {
    try {
      const data = await UserController.service.getById(req.params.id);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async updateById(req: Request, res: Response) {
    try {
      const data = await UserController.service.update(req.params.id, req.body);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }

  static async deleteById(req: Request, res: Response) {
    try {
      const data = await UserController.service.delete(req.params.id);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async create(req: Request, res: Response) {
    try {
      const data = await UserController.service.create(req.body);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async createUserAndSubscribeToPlan(req: Request, res: Response) {
    try {
      const data = await UserController.service.create(req.body);
      await new UsersSubscriptionRepository().create({
        plan: req.body.plan, //plan id
        user: data.toJSON().id,
        status: 'requested',
      });
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
}
