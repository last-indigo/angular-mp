import { Component, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

import { CourseModel } from '../course/course.model';

@Component({
  selector: 'courses-toolbox',
  styleUrls: ['courses-toolbox.component.scss'],
  templateUrl: 'courses-toolbox.component.html'
})
export class CoursesToolboxComponent {
  @Output() public onAddCourse: EventEmitter<any> = new EventEmitter();

  public searchQuery: string;

  constructor() {
    console.log('CoursesToolboxComponent initied');
  }

  public find() {
    console.log(this.searchQuery);
  }

  public addCourse($event) {
    // TODO: bind view inputs to a model?
    const newCourseModel: CourseModel = {
      id: _.uniqueId('id_'),
      title: 'mock title',
      duration: Math.ceil(Math.random() * 100) + 'm',
      description: 'mock description',
      publishedDate: new Date()
    };

    this.onAddCourse.emit({
      course: newCourseModel,
      $event: $event
    });
  }
}
