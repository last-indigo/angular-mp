import { Component, Input } from '@angular/core';
import { CourseModel } from './course.model';

@Component({
  selector: 'course',
  styleUrls: ['course.component.scss'],
  templateUrl: 'course.component.html'
})

export class CourseComponent {
  // @Input private courseObj: any;
  // TODO: remember to put parens!!!
  @Input() public courseInput: CourseModel;
}
