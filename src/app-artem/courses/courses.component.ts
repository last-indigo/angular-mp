import { Component } from '@angular/core';
import { CourseModel } from './course/course.model';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  styleUrls: ['courses.component.scss'],
  templateUrl: 'courses.component.html'
})
export class CoursesComponent {
  public courses: CourseModel[];

  constructor(
    private coursesService: CoursesService
  ) {
    coursesService.getCourses()
      .then((res) => {
        this.courses = res;
      });
  }

  public handleRemoveCourseParent($event) {
    console.log('handleRemoveCourseParent caught in CoursesComponent', $event);
  }
}
