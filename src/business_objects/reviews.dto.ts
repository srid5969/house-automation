export interface UserReview {
  readonly id?: string;
  user: string;
  plan: string;
  start_rate?: number;
  comment?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
