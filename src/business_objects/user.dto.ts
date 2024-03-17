import {USER_TYPE} from '../util/enum';

export interface User {
  readonly id: string;
  verified_user?: boolean;
  name?: string;
  user_type?: USER_TYPE;
  email?: string;
  phone?: string;
  password?: string;
  address?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
