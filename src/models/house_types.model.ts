import {DataTypes} from 'sequelize';
import sequelize from './../config/sequelize';

export const HouseTypeSchema = sequelize.define('house_types', {
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
