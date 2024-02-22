import {DataTypes} from 'sequelize';
import sequelize from './../config/sequelize';

export const UserSubscriptionSchema = sequelize.define('user_subscriptions', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
});
