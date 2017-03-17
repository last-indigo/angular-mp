import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() public onRemove: EventEmitter<any> = new EventEmitter();
  @Output() public onEdit: EventEmitter<any> = new EventEmitter();

  public deleteCourse() {
    this.onRemove.emit([
      this.courseInput.id,
      'HI! from CourseComponent',
      'The model was:',
      this.courseInput
    ]);
  }

  public editCourse() {
    this.onEdit.emit([
      this.courseInput.id,
      'HI! from CourseComponent',
      'The model was:',
      this.courseInput
    ]);
  }
}
