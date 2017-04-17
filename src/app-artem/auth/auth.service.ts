import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  /*
   Create authorization service.
   Implement next methods.

   Use authService in header component.
   Implement fake action on logout (wipe user info, console.log etc...)
   */

  private fakeUserInfo: Observable<any> = Observable.of({
    name: '%mock_username%',
    token: 'SERCRET_KEY_MOCK'
  });

  private authLSKey: string = 'a2-Auth';

  constructor() {
    console.log('AuthService');
  }

  // Login (stores fake user info and token to local storage)
  public login(credentials) {
    this.fakeUserInfo.subscribe(
      (response) => {
        // TODO: how to pass credentials from view to be consumed by observable?
        // this.fakeUserInfo = _.extend({}, this.fakeUserInfo, credentials);
        localStorage.setItem(this.authLSKey, JSON.stringify(response));
        console.log(`hello, ${response.name}! (authService#login)`);
      }
    );
  }

  // Logout (wipes fake user info and token from local storage)
  public logout() {
    localStorage.removeItem(this.authLSKey);
    console.log('authService#logout');
  }

  // IsAuthenticated (boolean)
  public isAuthenticated(): boolean {
    const storage = localStorage.getItem(this.authLSKey);
    return storage && typeof JSON.parse(storage) === 'object';
  }

  // GetUserInfo (returns user login)
  public getUserInfo(): Observable<any> {
    return this.fakeUserInfo;
  }
}
