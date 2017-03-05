import { Component } from '@angular/core';
import { CourseModel } from './course/course.model';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.component.html'
})
export class CoursesComponent {
  public courses: CourseModel[];  // TODO: not working yet?

  constructor(
    private coursesService: CoursesService
  ) {
    coursesService.getCourses()
      .then((res) => {
        this.courses = res;
      });
  }
}
