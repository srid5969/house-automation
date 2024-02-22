import { Request, Response } from 'express';
import { AppError } from '../../util/app-error';
import { HouseTypeRepository } from './../../repositories/houseTypes.repository';
import { InternalErrorResponse, SuccessResponse } from './../../util/apiResponse';
import { ResponseMsg } from './../../util/enum';

export class HouseTypeController {
  private static service = new HouseTypeRepository();
  static async getAll(req: Request, res: Response) {
    try {
      const data = await HouseTypeController.service.getAll();
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async getById(req: Request, res: Response) {
    try {
      const data = await HouseTypeController.service.getById(req.params.id);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async updateById(req: Request, res: Response) {
    try {
      const data = await HouseTypeController.service.update(
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
      const data = await HouseTypeController.service.delete(req.params.id);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
  static async create(req: Request, res: Response) {
    try {
      const data = await HouseTypeController.service.create(req.body);
      new SuccessResponse(res, ResponseMsg.SUCCESS, data).send();
    } catch (error) {
      if (error instanceof AppError) return AppError.handle(error, res);
      new InternalErrorResponse(res).send();
    }
  }
}
