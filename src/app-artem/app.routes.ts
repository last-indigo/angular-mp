import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthGuard } from './auth';
import { CanDeactivateCourses } from './courses/courses.guards';
import { CourseAddComponent } from './course-add/course-add.component';
import { PageNotFoundComponent } from './404/404.component';

/**
 * pathMatch - strict equality (not matcher). Options: full/prefix
 */
const COURSES_PATH = 'courses';
export const ROUTES: Routes = [
  { path: '', redirectTo: COURSES_PATH, pathMatch: 'full' }, // doesn't have component, just a redirect
  { path: 'redirect', redirectTo: COURSES_PATH, pathMatch: 'full' }, // doesn't have component, just a redirect

  { path: 'login', component: LoginPageComponent},

  {
    path: COURSES_PATH,
    component: CoursesComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateCourses],
  },

  {
    path: `${COURSES_PATH}/new`,
    pathMatch: 'full',
    component: CourseAddComponent,
    canActivate: [AuthGuard],
    // canDeactivate: [],
  },

  {
    path: `${COURSES_PATH}/:id`,
    component: CourseAddComponent,
    canActivate: [AuthGuard],
    // canDeactivate: [],
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];
