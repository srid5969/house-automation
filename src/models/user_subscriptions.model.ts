import {DataTypes} from 'sequelize';
import sequelize from './../config/sequelize';
import {UserSchema} from './users.model';
import {PlanMappingSchema} from './plan_mapping.model';

export const UserSubscriptionSchema = sequelize.define('user_subscriptions', {
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
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
});
