import {Model, Optional} from 'sequelize';
import {PlanTypeSchema} from '../models/plan_types.model';
import {AppError, InternalError} from './../util/app-error';
import {PlanType} from '../business_objects/plan-types.dto';

export class PlanTypeRepository {
  public async create(createObj: Optional<PlanType, 'id'>) {
    try {
      const data = await PlanTypeSchema.create<Model<PlanType>>(createObj);
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async update(id: string, updateObj: Partial<PlanType>) {
    try {
      const update = await PlanTypeSchema.update(updateObj, {
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
      const deleteData = await PlanTypeSchema.destroy({
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
      const data = await PlanTypeSchema.findAll<Model<PlanType>>();
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async getById(id: string) {
    try {
      const data = await PlanTypeSchema.findOne<Model<PlanType>>({where: {id}});
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
}
