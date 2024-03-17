import {AppError, InternalError} from '../util/app-error';
import {AutomationAreaTypeSchema} from '../models/automation_area_types.model';
import {AutomationAreaTypeDto} from '../business_objects/area-types.dto';
import {Model, Optional} from 'sequelize';

export class AutomationAreaTypesRepository {
  public async create(createObj: Optional<AutomationAreaTypeDto, 'id'>) {
    try {
      const data =
        await AutomationAreaTypeSchema.create<Model<AutomationAreaTypeDto>>(
          createObj
        );
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async update(id: string, updateObj: Partial<AutomationAreaTypeDto>) {
    try {
      const update = await AutomationAreaTypeSchema.update(updateObj, {
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
      const deleteData = await AutomationAreaTypeSchema.destroy({
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
        await AutomationAreaTypeSchema.findAll<Model<AutomationAreaTypeDto>>();
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async getById(id: string) {
    try {
      const data = await AutomationAreaTypeSchema.findOne<
        Model<AutomationAreaTypeDto>
      >({where: {id}});
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
}
