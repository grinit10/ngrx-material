import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Guid } from 'guid-typescript';
import { Subject } from 'rxjs';

export class AuthService {
  private _user: User;
  authChange = new Subject<boolean>();

  registerUser = (authdata: AuthData) => this._user = {
    email: authdata.email,
    userId: Guid.create().toString()
  }

  login = (authdata: AuthData) => {
    this._user = {
      email: authdata.email,
      userId: Guid.create().toString()
    };
    this.authChange.next(true);
  }

  logout = () => {
    this._user = null;
    this.authChange.next(false);
  }

  getUser = () => {
    return { ...this._user };
  }

  isAuth = () => this._user !== null;
}
