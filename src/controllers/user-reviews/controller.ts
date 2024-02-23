import {Request, Response} from 'express';
import {InternalErrorResponse, SuccessResponse} from '../../util/apiResponse';
import {AppError} from '../../util/app-error';
import {ResponseMsg} from '../../util/enum';
import {UserReviewsRepository} from './../../repositories/userReviews.repository';

export class UserReviewsController {
  private static service = new UserReviewsRepository();
  static async getAll(req: Request, res: Response) {
    try {
      const data = await UserReviewsController.service.getAll();
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async getById(req: Request, res: Response) {
    try {
      const data = await UserReviewsController.service.getById(req.params.id);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async updateById(req: Request, res: Response) {
    try {
      const data = await UserReviewsController.service.update(
        req.params.id,
        req.body
      );
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }

  static async deleteById(req: Request, res: Response) {
    try {
      const data = await UserReviewsController.service.delete(req.params.id);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async create(req: Request, res: Response) {
    try {
      const data = await UserReviewsController.service.create(req.body);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
}
