import {DataTypes} from 'sequelize';
import sequelize from './../config/sequelize';

export const HouseTypeSchema = sequelize.define('house_types', {
  //house size eg: 1BHK
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  icon: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
});
