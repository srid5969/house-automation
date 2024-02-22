import {DataTypes} from 'sequelize';
import sequelize from './../config/sequelize';

export const UserSchema = sequelize.define('users', {
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
