import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesComponent } from './courses.component';

export class CanDeactivateCourses implements CanDeactivate {
  public canDeactivate(
    component: CoursesComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('CanDeactivateCourses#canDeactivate', arguments);
    return false;
  }

}
