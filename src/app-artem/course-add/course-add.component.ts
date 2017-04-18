// course-add.component.ts
import { Component } from '@angular/core';
import { ArtemDurationPipe } from '../common/duration.pipe';

@Component({
  selector: 'course-add',
  templateUrl: './course-add.component.html',

  providers: [
    ArtemDurationPipe
  ]
})
export class CourseAddComponent {
  constructor(){}

  public save() {
    alert('saved!');

    // this.coursesService.createCourse($event.course)
    //   .subscribe(
    //     (response) => {
    //       // the following is required, otherwise the view will not be updated
    //       this.ref.markForCheck();
    //       this.courses = [response, ...this.courses];
    //     },
    //     (error) => {
    //       console.log('handleAddCourseParent| observable error:', error);
    //     },
    //     () => {
    //       console.log('handleAddCourseParent| observable final');
    //     }
    //   )
    // ;
  }

  public cancel() {
    alert('canceled!');
  }

}
