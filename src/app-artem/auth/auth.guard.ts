import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  private canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    // return Observable.of(false);
    const isAuthOk = this.authService.isAuthenticated();
    if (!isAuthOk) {
      // https://angular.io/docs/ts/latest/guide/router.html#!#guards
      this.router.navigate(['/login']);
    }
    return isAuthOk;
  }

}
