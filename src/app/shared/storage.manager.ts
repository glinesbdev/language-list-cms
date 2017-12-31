import { Injectable } from "@angular/core";

@Injectable()
export class StorageManagerService {
  constructor() {}

  getLogin(): Object {
    return localStorage.getItem('login') ? JSON.parse(localStorage.getItem('login')) : undefined;
  }

  setLogin(data: any): void {
    localStorage.setItem('login', data);
  }

  deleteLogin(): void {
    localStorage.removeItem('login');
  }
}