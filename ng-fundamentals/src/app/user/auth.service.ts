import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  currenytUser:IUser

  loginUser(userName: string, password: string) {
    this.currenytUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    }
  }

  isAuthenticated() {
    return !!this.currenytUser;
  }
}
