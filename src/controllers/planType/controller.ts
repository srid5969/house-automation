import {Request, Response} from 'express';
import {AppError} from '../../util/app-error';
import {PlanTypeRepository} from './../../repositories/planType.repository';
import {InternalErrorResponse, SuccessResponse} from './../../util/apiResponse';
import {ResponseMsg} from './../../util/enum';

export class PlanTypeController {
  private static service = new PlanTypeRepository();
  static async getAll(req: Request, res: Response) {
    try {
      const data = await PlanTypeController.service.getAll();
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async getById(req: Request, res: Response) {
    try {
      const data = await PlanTypeController.service.getById(req.params.id);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async updateById(req: Request, res: Response) {
    try {
      const data = await PlanTypeController.service.update(
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
      const data = await PlanTypeController.service.delete(req.params.id);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async create(req: Request, res: Response) {
    try {
      const data = await PlanTypeController.service.create(req.body);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
}
