import {PlanMappingSchema} from './../models/plan_mapping.model';
import {AppError, InternalError} from './../util/app-error';

export class PlanMappingRepository {
  public async create(createObj: any) {
    try {
      const data = await PlanMappingSchema.create(createObj);
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async update(id: string, updateObj: any) {
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
  public async getAll(query: any) {
    try {
      const data = await PlanMappingSchema.findAll({where: query});
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async getById(id: string) {
    try {
      const data = await PlanMappingSchema.findOne({where: {id}});
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
}
