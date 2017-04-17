import * as coursesMockData from './courses.api-mock.json';
import { CourseModel } from './course/course.model';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

export class CoursesService {
  private coursesList: CourseModel[];

  constructor() {
    this.coursesList = coursesMockData;
    console.log('CoursesService: constructor() this.coursesList', this.coursesList);
  }

  // TODO: shouldn't this be inferred from the -- private coursesList: CourseModel[] --- ???
  public getCourses(): Observable<CourseModel[]> {
    // imitate async
    return Observable.of(this.coursesList);
  }

  /*
   * From task notes: "Do not use http module to solve a task."
   */

  public createCourse(rawModel: CourseModel): Observable<CourseModel> {
    // $http.post()
    this.coursesList = [rawModel, ...this.coursesList];
    console.warn('createCourse success');
    // return Observable.from(rawModel);
    return Observable.of(rawModel);
  }

  // TODO: to return    : Observable<CourseModel>
  public updateCourseById(id: string, patch: any) {
    // $http.patch()

    // return Observable.from(null);
    return Observable.of(null);
  }

  public getCourseById(id: string): Observable<CourseModel> {
    // $http.get()
    const result = _.find(this.coursesList, {id});
    // return Observable.from(result);
    return Observable.of(result);
  }

  public removeCourseById(id: string): Observable<CourseModel[]> {
    // $http.get()
    console.warn('removeCourseById acknowledged delete');
    this.coursesList = _.reject(this.coursesList, {id});
    // return Observable.from(this.coursesList);
    return Observable.of(this.coursesList);
  }
}
