import {Model, Optional} from 'sequelize';
import {AppError, InternalError} from '../util/app-error';
import {NotificationSchema} from './../models/notifications.model';
import {NotificationDto} from '../business_objects/notifications.dto';

export class NotificationsRepository {
  public async create(createObj: Optional<NotificationDto, 'id'>) {
    try {
      const data =
        await NotificationSchema.create<Model<NotificationDto>>(createObj);
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async update(id: string, updateObj: Partial<NotificationDto>) {
    try {
      const update = await NotificationSchema.update(updateObj, {
        where: {id},
      });
      return update;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async delete(id: string) {
    try {
      const deleteData = await NotificationSchema.destroy({
        where: {id},
      });
      return deleteData;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async getAll() {
    try {
      const data = await NotificationSchema.findAll<Model<NotificationDto>>();
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async getById(id: string) {
    try {
      const data = await NotificationSchema.findOne<Model<NotificationDto>>({
        where: {id},
      });
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
}
