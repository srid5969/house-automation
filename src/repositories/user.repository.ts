import {AppError, InternalError} from '../util/app-error';
import {UserSchema} from './../models/users.model';
import bcrypt from 'bcrypt';

export class UsersRepository {
  public async create(createObj: any) {
    try {
      if (createObj.password)
        createObj.password = await bcrypt.hash(createObj.password, 10);
      if (createObj.email)
        createObj.email = ('' + createObj.email).toString().toLowerCase();
      const data = await UserSchema.create(createObj);
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async update(id: string, updateObj: any) {
    try {
      const update = await UserSchema.update(updateObj, {
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
      const deleteData = await UserSchema.destroy({
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
      const data = await UserSchema.findAll();
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async getById(id: string) {
    try {
      const data = await UserSchema.findOne({where: {id}});
      return data;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
  public async getUserByEmail(email: string) {
    try {
      const data = await UserSchema.findOne({
        where: {email: email.toLowerCase()},
      });
      return data ? data.toJSON() : null;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new InternalError();
    }
  }
}
