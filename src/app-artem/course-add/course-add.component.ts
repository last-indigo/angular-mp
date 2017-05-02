// course-add.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { ArtemDurationPipe } from '../common/duration.pipe';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'course-add',
  templateUrl: './course-add.component.html',

  providers: [
    ArtemDurationPipe
  ]
})
export class CourseAddComponent {
  @Output() public onCourseAdded: EventEmitter = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ){}

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

  public submitNewCourse(formGroup) {
    // const titleFormControl = formGroup.get('title');
    // const descriptionsFormControl = formGroup.get('descriptionNewCourse');

    this.onCourseAdded.emit(formGroup.value);
  }

  // public courseFieldsFE = {
  //   title: 'title',
  //   description: 'description',
  //   publishedDate: 'publishedDate',
  //   duration: 'duration'
  // };
  public courseFieldsBE = {
    name: 'name',
    description: 'description',
    date: 'date',
    length: 'length'
  };
  public addCourseForm = this.formBuilder.group({
    [this.courseFieldsBE.name]: [''],
    [this.courseFieldsBE.description]: [''],
    [this.courseFieldsBE.date]: [''],
    [this.courseFieldsBE.length]: [''],
  });

}
