import {Model, Optional} from 'sequelize';
import {PlanMappingSchema} from './../models/plan_mapping.model';
import {AppError, InternalError} from './../util/app-error';
import {PlanMapping} from '../business_objects/plans.dto';

export class PlanMappingRepository {
  public async create(createObj: Optional<PlanMapping, 'id'>) {
    try {
      const data =
        await PlanMappingSchema.create<Model<PlanMapping>>(createObj);
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async update(id: string, updateObj: Partial<PlanMapping>) {
    try {
      const update = await PlanMappingSchema.update(updateObj, {
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
      const deleteData = await PlanMappingSchema.destroy({
        where: {id},
      });
      return deleteData;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async getAll(query: Partial<PlanMapping>) {
    try {
      const data = await PlanMappingSchema.findAll<Model<PlanMapping>>({
        where: query,
      });
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async getById(id: string) {
    try {
      const data = await PlanMappingSchema.findOne<Model<PlanMapping>>({
        where: {id},
      });
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
}
