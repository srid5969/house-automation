import {DataTypes} from 'sequelize';
import sequelize from './../config/sequelize';

export const AutomationAreaTypeSchema = sequelize.define(
  'automation_area_types',
  //area type eg: Advanced,Standard
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    badge: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active',
    },
  }
);
