import {DataTypes} from 'sequelize';
import sequelize from './../config/sequelize';
import {UserSchema} from './users.model';

export const NotificationSchema = sequelize.define(
  'notifications',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user: {
      type: DataTypes.UUID,
      references: {
        model: UserSchema,
        key: 'id',
      },
    },
    type: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    redirect_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    read_at: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active',
    },
  },
  {timestamps: true}
);
