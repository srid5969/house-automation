import {USER_TYPE} from './../util/enum';
import {DataTypes} from 'sequelize';
import sequelize from './../config/sequelize';

export const UserSchema = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    verified_user: {
      type: DataTypes.BOOLEAN,
    },
    name: {
      type: DataTypes.STRING,
    },
    user_type: {
      type: DataTypes.ENUM(USER_TYPE.ADMIN, USER_TYPE.CUSTOMER),
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active',
    },
  },
  {
    timestamps: true,
  }
);
