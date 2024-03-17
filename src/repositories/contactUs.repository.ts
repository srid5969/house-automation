import {AppError, InternalError} from '../util/app-error';
import {ContactUsSchema} from '../models/contact_us.model';
import {Model, Optional} from 'sequelize';
import {ContactUsDto} from '../business_objects/contact-us.dto';

export class ContactUsRepository {
  public async create(createObj: Optional<ContactUsDto, 'id'>) {
    try {
      const data = await ContactUsSchema.create<Model<ContactUsDto>>(createObj);
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async update(id: string, updateObj: Partial<ContactUsDto>) {
    try {
      const update = await ContactUsSchema.update(updateObj, {
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
      const deleteData = await ContactUsSchema.destroy({
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
      const data = await ContactUsSchema.findAll<Model<ContactUsDto>>();
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async getById(id: string) {
    try {
      const data = await ContactUsSchema.findOne<Model<ContactUsDto>>({
        where: {id},
      });
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
}
