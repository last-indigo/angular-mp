import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,

  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,

  SimpleChanges
} from '@angular/core';
import { CourseModel } from './course/course.model';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  styleUrls: ['courses.component.scss'],
  templateUrl: 'courses.component.html'
})
export class CoursesComponent implements OnInit, OnChanges, OnDestroy,
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  public courses: CourseModel[];

  constructor(
    private coursesService: CoursesService
  ) {
    this.coursesService = coursesService;
  }

  public handleRemoveCourseParent($event) {
    console.log('handleRemoveCourseParent caught in CoursesComponent', $event);

    this.coursesService.removeCourseById($event[0])
      .then((response) => {
        this.courses = response;
      })
      .catch((reason) => {
        console.log('handleRemoveCourseParent failed with reason:', reason);
      })
    ;
  }

  public handleEditCourseParent($event) {
    console.log('handleEditCourseParent caught in CoursesComponent', $event);

    this.coursesService.getCourseById($event[0])
      .then(() => {
        console.log('handleEditCourseParent: success');
      })
      .catch(() => {
        console.log('handleEditCourseParent: error');
      })
    ;
  }

  public ngOnInit(): void {
    console.log('--- ngHooks in CoursesComponent: --- ngOnInit', arguments);

    this.coursesService.getCourses()
      .then((response) => {
        this.courses = response;
      });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('--- ngHooks in CoursesComponent: --- ngOnChanges', arguments);
  }

  public ngOnDestroy(): void {
    console.log('--- ngHooks in CoursesComponent: --- ngOnDestroy', arguments);
  }

  public ngAfterContentChecked(): void {
    console.log('--- ngHooks in CoursesComponent: --- ngAfterContentChecked', arguments);
  }

  public ngAfterContentInit(): void {
    console.log('--- ngHooks in CoursesComponent: --- ngAfterContentInit', arguments);
  }

  public ngAfterViewChecked(): void {
    console.log('--- ngHooks in CoursesComponent: --- ngAfterViewChecked', arguments);
  }

  public ngAfterViewInit(): void {
    console.log('--- ngHooks in CoursesComponent: --- ngAfterViewInit', arguments);
  }

}
