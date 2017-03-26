import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,

  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,

  ChangeDetectorRef,
  ChangeDetectionStrategy,
  SimpleChanges
} from '@angular/core';
import { CourseModel } from './course/course.model';
import { CoursesService } from './courses.service';

// TODO: figure this out!
import { ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  // changing just this breaks page - no changes would be detected, the view will not be updated
  changeDetection: ChangeDetectionStrategy.OnPush,

  selector: 'app-courses',
  styleUrls: ['courses.component.scss'],
  templateUrl: 'courses.component.html'
})
export class CoursesComponent implements OnInit, OnChanges, OnDestroy,
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  public courses: CourseModel[];

  constructor(
    private ref: ChangeDetectorRef,
    // TODO: figure this out!
    overlay: Overlay,
    vcRef: ViewContainerRef,
    public modal: Modal,

    private coursesService: CoursesService
  ) {
    this.coursesService = coursesService;

    // TODO: figure this out!
    overlay.defaultViewContainer = vcRef;
  }

  // TODO: figure this out!
  public onRemoveModalShow() {
    const modal =
      this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Delete confirmation')
        .body(`
            <h4>Operation cannot be undone!</h4>
            <p>Please press OK button if you are sure</p>
        `)
        .open();

    console.log(modal);

    return modal;
  }

  public handleRemoveCourseParent($event) {
    console.log('handleRemoveCourseParent caught in CoursesComponent', $event);

    this.onRemoveModalShow()
      .then((modal) => {
        console.log(`onRemoveModalShow.then modal:`, modal);
        return modal.result;
      })
      .catch((dismissal) => {
        // NOTE: otherwise, .then's get executed
        throw 'modal has been dismissed!';
      })
      .then((confirmation) => {
        return this.coursesService.removeCourseById($event[0]);
      })
      .then((response) => {
        console.log(`from this.coursesService.removeCourseById:`, response);

        // the following is required, otherwise the view will not be updated
        this.ref.markForCheck();
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

  public handleAddCourseParent($event) {
    console.log('handleAddCourseParent caught in CoursesComponent', $event);

    this.coursesService.createCourse($event.course)
      .then((response) => {
        console.log('handleAddCourseParent: course created');
        this.courses = [response, ...this.courses];
      })
      .catch(() => {
        console.log('handleAddCourseParent: error creating course');
      })
    ;
  }

  public ngOnInit(): void {
    console.log('--- ngHooks in CoursesComponent: --- ngOnInit', arguments);

    this.coursesService.getCourses()
      .then((response) => {
        // the following is required, otherwise the view will not be updated
        this.ref.markForCheck();

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
