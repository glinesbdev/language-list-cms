export class UserModel {
  constructor(id: number, email: string, uid: string, url: string, admin: boolean, username: string) {
    this.id = id;
    this.email = email;
    this.uid = uid;
    this.url = url;
    this.admin = admin;
    this.username = username;
  }

  id: number;
  email: string;
  uid: string;
  url: string;
  admin: boolean;
  username: string;
}