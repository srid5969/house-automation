export interface NotificationDto {
  id: string;
  user: string;
  type: string;
  message: string;
  title: string;
  redirect_url?: string | null;
  read_at?: Date | null;
  status: string;
}
