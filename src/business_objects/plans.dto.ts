export interface PlanMapping {
  readonly id?: string;
  payment_cycle?: string;
  plan?: string;
  house_type?: string;
  area_type?: string;
  per_day_cost?: number;
  extra_subscription_days?: number;
  subscription_fee?: number;
  security_deposit?: number;
  installation_charges?: number;
  tax_and_other_charges?: number;
  offer?: boolean;
  pay_amount?: number;
  status?: string;
}
