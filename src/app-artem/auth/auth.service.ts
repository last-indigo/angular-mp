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
  private baseUrl = '//localhost:3004';
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
    return this.usersList
      .map((usersList: UserInfoInterface[]) => {
        // TODO: this is bad! do not fetch all users to match just one
        // I don't know how to get single userInfo by username
        this.currentUser = _.find(usersList, user => user.login === credentials.name);
        console.log('AuthService: this.currentUser', this.currentUser);

        if (this.currentUser && this.currentUser.fakeToken) {
          // TODO: where should LS be manipulated? can I chain (with map or smth else)?
          localStorage.setItem(this.userInfoLSKey, JSON.stringify(this.currentUser));
          localStorage.setItem(this.authLSKey, JSON.stringify(this.currentUser.fakeToken));
        }
        return Observable.of(this.currentUser);
      })
      .switch();  // stream current user
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
