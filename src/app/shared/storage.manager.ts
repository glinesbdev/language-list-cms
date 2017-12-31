import { Injectable } from "@angular/core";

@Injectable()
export class StorageManagerService {
  constructor() {}

  getLogin(): Object {
    if (localStorage.getItem('login')) {
      return JSON.parse(localStorage.getItem('login'));
    }

    return undefined;
  }

  setLogin(data: any): void {
    localStorage.setItem('login', data);
  }
}