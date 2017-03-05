import { NgModule } from '@angular/core';
import { CoursesService } from './courses.service';
// import { CoursesComponent } from './courses.component';  // TODO: why there was a problem?
// import { CourseComponent } from './course/course.component';  // TODO: why there was a problem?


// can't export if it is neither declared, nor imported

@NgModule({
  declarations: [
    // CoursesComponent,  // TODO: why there was a problem?
    // CourseComponent  // TODO: why there was a problem?
  ],
  providers: [
    CoursesService
  ],
  exports: [
    // CoursesComponent,
    // CourseComponent
  ]
})
export class CoursesModule {
  constructor() {
    console.log('CoursesModule: constructor()');
  }
}
