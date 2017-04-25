import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { UserInfoInterface } from './user-info.interface'

@Injectable()
export class AuthService {
  /*
   Create authorization service.
   Implement next methods.

   Use authService in header component.
   Implement fake action on logout (wipe user info, console.log etc...)
   */



  private authLSKey: string = 'a2-Auth_fakeToken';

  private userInfoLSKey: string = 'a2-Auth_userInfo';
  private baseUrl: string = '//localhost:3004'; // TODO: move to constant
  private usersList: Observable<UserInfoInterface[]> = this.getUsers();
  private currentUser: UserInfoInterface;

  constructor(private http: Http) {
    console.log('AuthService');
  }

  private getUsers() {
    return this.http.get(`${this.baseUrl}/users`)
      .map(res => res.json());
  }

  ngOnInit() {
    // does not get called in @Injectable()'s
  }

  // Login (stores fake user info and token to local storage)
  public login(credentials) {
    console.log('AuthService: login()');
    return this.http.post(`${this.baseUrl}/auth/login`, {
      login: credentials.name,
      password: credentials.password
    })
      .map((response) => {
        const result: { token: string } = response.json();
        console.log('token', result);
        if (result.token) {
          // TODO: where should LS be manipulated? can I chain (with map or smth else)?
          localStorage.setItem(this.authLSKey, JSON.stringify(result.token));
        }
      })
      ;
  }

  // Logout (wipes fake user info and token from local storage)
  public logout() {
    localStorage.removeItem(this.authLSKey);
    console.log('authService#logout');
  }

  // IsAuthenticated (boolean)
  public isAuthenticated(): boolean {
    const storage = localStorage.getItem(this.authLSKey);
    const authToken = storage && JSON.parse(storage);
    return authToken && typeof authToken === 'string';
  }

  // GetUserInfo (returns user login)
  public getUserInfo(): Observable<any> {
    console.log('AuthService: getUserInfo()');
    return Observable.of(
      JSON.parse(localStorage.getItem(this.userInfoLSKey))
    );
  }
}
