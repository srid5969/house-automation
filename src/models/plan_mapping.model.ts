import {DataTypes} from 'sequelize';
import sequelize from './../config/sequelize';
import {AutomationAreaTypeSchema} from './automation_area_types.model';
import {HouseTypeSchema} from './house_types.model';
import {PlanTypeSchema} from './plan_types.model';
import {PaymentCycle} from '../util/enum';

export const PlanMappingSchema = sequelize.define('plan_mapping', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  payment_cycle: {
    type: DataTypes.STRING,
    values: [
      PaymentCycle.ANNUAL,
      PaymentCycle.SEMI_ANNUAL,
      PaymentCycle.QUARTERLY,
      PaymentCycle.MONTHLY,
    ],
  },
  plan: {
    type: DataTypes.UUID,
    references: {
      model: PlanTypeSchema,
      key: 'id',
    },
  },
  house_type: {
    type: DataTypes.UUID,
    references: {
      model: HouseTypeSchema,
      key: 'id',
    },
  },
  area_type: {
    type: DataTypes.UUID,
    references: {
      model: AutomationAreaTypeSchema,
      key: 'id',
    },
  },
  per_day_cost: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  extra_subscription_days: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  subscription_fee: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  security_deposit: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  installation_charges: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  tax_and_other_charges: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  offer: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  pay_amount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
});
