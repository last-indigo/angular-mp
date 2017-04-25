import * as coursesMockData from './courses.api-mock.json';
import { CourseModel } from './course/course.model';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

export class CoursesService {
  private coursesList: CourseModel[];
  private BE_MISTAKES_MAPPING: Map<string, string> = new Map();

  constructor() {
    // Use map function to cast response shape to data model. (since BE side is not implemented yet
    // - pretend to have fake collection not to match data model).
    CoursesService.prepareMapWithBEErrors(this.BE_MISTAKES_MAPPING);

    this.coursesList = coursesMockData;
    console.log('CoursesService: constructor() this.coursesList', this.coursesList);
  }

  // TODO: shouldn't this be inferred from the -- private coursesList: CourseModel[] --- ???
  public getCourses(): Observable<CourseModel[]> {
    // imitate async
    return Observable.of(this.coursesList)
      .map((list: CourseModel[]) => {
        return list.map((course: CourseModel) => {
          return this.patchCourseBEToClient(course);
        });
      });
  }

  private static prepareMapWithBEErrors(mapObject) {
    console.log('prepareMapWithBEErrors');
    return mapObject.set('BE_MISTAKE_publishedDate', 'publishedDate');
  }

  private patchCourseBEToClient(oldCourse): CourseModel {
    let newCourse = Object.create(oldCourse);
    _.each(oldCourse, (valInitial, oldKey) => {
      let newKey = this.BE_MISTAKES_MAPPING.has(oldKey) ?
          this.BE_MISTAKES_MAPPING.get(oldKey) :
          oldKey;
      newCourse[newKey] = valInitial;
    });
    return newCourse;
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
