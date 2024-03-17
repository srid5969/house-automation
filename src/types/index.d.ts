declare namespace Express {
  export interface Request {
    id?: string;
    user?: any;
  }
  export interface Response {
    id: string;
  }
}
