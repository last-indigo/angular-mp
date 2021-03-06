import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter
} from '@angular/core';
import * as _ from 'lodash';

import { CourseModel } from '../course/course.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'courses-toolbox',
  styleUrls: ['courses-toolbox.component.scss'],
  templateUrl: 'courses-toolbox.component.html'
})
export class CoursesToolboxComponent {
  @Output() public onFind: EventEmitter<string> = new EventEmitter();
  @Output() public onAddCourse: EventEmitter<any> = new EventEmitter();

  public searchQuery: string;

  constructor() {
    console.log('CoursesToolboxComponent initied');
  }

  public find() {
    this.onFind.emit(this.searchQuery);
  }

  public addCourse($event) {
    // TODO: bind view inputs to a model?
    const newCourseModel: CourseModel = {
      id: _.uniqueId('id_'),
      topRated: false,
      title: 'mock title',
      duration: Math.ceil(Math.random() * 100),
      description: 'mock description',
      publishedDate: new Date()
    };

    this.onAddCourse.emit({
      // course: newCourseModel,
      toView: 'add-course',
      $event
    });
  }
}
