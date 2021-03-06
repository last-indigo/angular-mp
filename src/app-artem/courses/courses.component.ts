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
  SimpleChanges, Output, EventEmitter
} from '@angular/core';
import { CourseModel } from './course/course.model';
import { CoursesService } from './courses.service';
import { FreshnessDetectorService } from '../common/freshness-detector.service';

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

  @Output() public onViewChange: EventEmitter<any> = new EventEmitter();
  public courses: CourseModel[];
  private filteredCourses: CourseModel[];
  // TODO: commented out, to demonstrate all courses
  // private freshnessCriterionDays: number = 14

  constructor(
    private ref: ChangeDetectorRef,
    // TODO: figure this out!
    overlay: Overlay,
    vcRef: ViewContainerRef,
    public modal: Modal,

    private freshDetectService: FreshnessDetectorService,
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
      // NOTE: do NOT do another .then() chaining here, this will break observable
      .then((observableInstance) => {
        console.log(`from this.coursesService.removeCourseById:`, observableInstance);

        // #5: Add integration for course delete. Recall courses list after delete action
        observableInstance
          .map(() => this.coursesService.getCourses())
          .switch()
          .subscribe(
            (response) => {
              // the following is required, otherwise the view will not be updated
              this.ref.markForCheck();
              this.courses = response;
            },
            (error) => {
              console.log('removeCourseById| observable error:', error);
            },
            () => {
              console.log('removeCourseById| observable final');
            }
          );
      })
      .catch((reason) => {
        console.log('handleRemoveCourseParent failed with reason:', reason);
      })
    ;

  }

  public handleEditCourseParent($event) {
    console.log('handleEditCourseParent caught in CoursesComponent', $event);

    this.coursesService.getCourseById($event[0])
      .subscribe(
        (response) => {
          console.log('handleEditCourseParent: success | response:', response);
        },
        (error) => {
          console.log('handleEditCourseParent| observable error:', error);
        },
        () => {
          console.log('handleEditCourseParent| observable final');
        }
      )
    ;
  }

  /**
   * Change find behavior
   *
   * Courses list is filtered by name when user enters some text
   * in the field ‘search’ and presses the ‘Find’ button.
   * (we need this task in order to try using pipes in component class not in the template)
   */
  public handleFind(queryString) {
    if (!queryString) {
      // keep original courses list intact
      this.filteredCourses = [...this.courses];
    }
    this.coursesService.searchCoursesByQuery(queryString)
      .subscribe((filteredCoursesList) => {
        this.ref.markForCheck();
        this.filteredCourses = filteredCoursesList;
      });
  }

  public handleAddCourseParent($event) {
    console.log('handleAddCourseParent caught in CoursesComponent', $event);

    this.onViewChange.emit($event);
  }

  public ngOnInit(): void {
    console.log('--- ngHooks in CoursesComponent: --- ngOnInit', arguments);

    this.coursesService.getCourses()
      // .map(
      //   (coursesList: CourseModel[]) => coursesList.filter(
      //     // Filter out outdated courses (date < currentDate - 14days).
      //     (course: CourseModel) => this.freshDetectService.verifyIfLatest(
      //       course.publishedDate,
      //       this.freshnessCriterionDays
      //     )
      //   )
      // )
      .subscribe(
        (response) => {
          console.info('response', response);
          // the following is required, otherwise the view will not be updated
          this.ref.markForCheck();

          this.courses = response;
        },
        (error) => {
          console.log('handleAddCourseParent| observable error:', error);
        },
        () => {
          console.log('handleAddCourseParent| observable final');
        }
      )
    ;
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
