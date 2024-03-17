import {Model, Optional} from 'sequelize';
import {AppError, InternalError} from '../util/app-error';
import {UserSubscriptionSchema} from './../models/user_subscriptions.model';
import {UserSubscription} from '../business_objects/user-subscription.dto';

export class UsersSubscriptionRepository {
  public async create(createObj: Optional<UserSubscription, 'id'>) {
    try {
      const data =
        await UserSubscriptionSchema.create<Model<UserSubscription>>(createObj);
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async update(id: string, updateObj: Partial<UserSubscription>) {
    try {
      const update = await UserSubscriptionSchema.update(updateObj, {
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
      const deleteData = await UserSubscriptionSchema.destroy({
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
      const data =
        await UserSubscriptionSchema.findAll<Model<UserSubscription>>();
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async getById(id: string) {
    try {
      const data = await UserSubscriptionSchema.findOne<
        Model<UserSubscription>
      >({where: {id}});
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
}
