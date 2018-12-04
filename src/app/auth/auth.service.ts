import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Guid } from 'guid-typescript';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private _user: User = null;
  authChange = new Subject<boolean>();

  constructor(private _router: Router) {
  }

  registerUser = (authdata: AuthData) => {
    this._user = {
      email: authdata.email,
      userId: Guid.create().toString()
    };
    this.successfulLogin();
  }

  login = (authdata: AuthData) => {
    this._user = {
      email: authdata.email,
      userId: Guid.create().toString()
    };
    this.successfulLogin();
  }

  logout = () => {
    this._user = null;
    this.authChange.next(false);
    this._router.navigate(['/signin']);
  }

  getUser = () => {
    return { ...this._user };
  }

  successfulLogin = () => {
    this.authChange.next(true);
    this._router.navigate(['/training']);
  }

  isAuth = () => this._user !== null;
}
