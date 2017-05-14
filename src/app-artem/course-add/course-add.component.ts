// course-add.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { ArtemDurationPipe } from '../common/duration.pipe';
import { FormBuilder } from '@angular/forms';
import { Length50Validator } from '../common/validators/length.50.validator';
import { Length500Validator } from '../common/validators/length.500.validator';

@Component({
  selector: 'course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['course-add.component.scss'],

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
    // initialization values go as first arg
    [this.courseFieldsBE.name]: ['', Length50Validator],
    [this.courseFieldsBE.description]: ['', Length500Validator],
    [this.courseFieldsBE.date]: ['30/11/2016'],
    [this.courseFieldsBE.length]: [''],
  });

  public authorsList = [
    {name: 'Author 1', checked: true},
    {name: 'Author 2', checked: false},
    {name: 'Author 3', checked: true},
    {name: 'Author 4', checked: true},
    {name: 'Author 5', checked: false},
  ]
}
