export interface ILogin {
  data: {
    id: number;
    email: string;
    provider: string;
    uid: string;
    username: string;
    admin: boolean;
  }
}
