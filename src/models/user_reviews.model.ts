import {DataTypes} from 'sequelize';
import sequelize from './../config/sequelize';
import {UserSchema} from './users.model';
import {PlanMappingSchema} from './plan_mapping.model';

export const UserReviewsSchema = sequelize.define(
  'user_reviews',
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
    plan: {
      type: DataTypes.UUID,
      references: {
        model: PlanMappingSchema,
        key: 'id',
      },
    },
    start_rate: {
      type: DataTypes.INTEGER,
    },
    comment: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active',
    },
  },
  {
    createdAt: true,
    updatedAt: true,
  }
);
