import {Model, Optional} from 'sequelize';
import {HouseTypeSchema} from '../models/house_types.model';
import {AppError, InternalError} from './../util/app-error';
import {HouseTypeDto} from '../business_objects/house-types.dto';

export class HouseTypeRepository {
  public async create(createObj: Optional<HouseTypeDto, 'id'>) {
    try {
      const data = await HouseTypeSchema.create<Model<HouseTypeDto>>(createObj);
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async update(id: string, updateObj: Partial<HouseTypeDto>) {
    try {
      const update = await HouseTypeSchema.update(updateObj, {
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
      const deleteData = await HouseTypeSchema.destroy({
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
      const data = await HouseTypeSchema.findAll<Model<HouseTypeDto>>();
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async getById(id: string) {
    try {
      const data = await HouseTypeSchema.findOne<Model<HouseTypeDto>>({
        where: {id},
      });
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
}
