import { NgModule } from '@angular/core';

/**
 * otherwise, *ngFor is not working
 */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { CoursesService } from './courses.service';

import { CoursesComponent } from './courses.component';
import { CoursesToolboxComponent } from './courses-toolbox';
import { CourseComponent } from './course/course.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CoursesComponent,
    CoursesToolboxComponent,
    CourseComponent
  ],
  providers: [
    CoursesService
  ],

  /**
   * THIS IS VERY IMPORTANT!
   * Otherwise, there will be ZONE problem,
   * and parent could not use this module
   *
   * ALSO: can't export if it is neither declared, nor imported
   */
  exports: [
    CoursesComponent,
    CoursesToolboxComponent,
    CourseComponent
  ]
})
export class CoursesModule {
  constructor() {
    console.log('CoursesModule: constructor()');
  }
}
