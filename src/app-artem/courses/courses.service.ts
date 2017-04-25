import { Http, Response } from '@angular/http';

import { CourseModel } from './course/course.model';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { Injectable } from '@angular/core';

// http://stackoverflow.com/questions/39847356/angular2-cant-resolve-all-parameters-error-while-injecting-http-into-a-cust
// without it error: Can't resolve all parameters for CoursesService
// otherwise we could use @Inject(Http) for every entity in constructor
// http://stackoverflow.com/questions/35370405/angular-2-http-cannot-resolve-all-parameters-for-appservice
@Injectable()
export class CoursesService {
  private coursesList: CourseModel[];
  private BE_MISTAKES_MAPPING: Map<string, string> = new Map();
  private baseUrl: string = '//localhost:3004'; // TODO: move to constant

  constructor(public http: Http) {
    this.init();
  }

  /**
   * Yea, for services you can do initialization in the constructor,
   * or better make init method and call it from the constructor (in case you need to reset a service later)
   * http://stackoverflow.com/questions/35110690/ngoninit-not-being-called-when-injectable-class-is-instantiated
   */
  public init() {
    // Use map function to cast response shape to data model. (since BE side is not implemented yet
    // - pretend to have fake collection not to match data model).
    CoursesService.doCourseMappingBEToFE(this.BE_MISTAKES_MAPPING);
  }

  public getCourses(): Observable<CourseModel[]> {
    // imitate async
    return this.http.get(`${this.baseUrl}/courses`)
      .map((response: Response) => response.json())
      .map((list: CourseModel[]) => {
        const result = list.map((course: CourseModel) => {
          return this.patchCourseBEToClient(course);
        });

        return result;
      });
  }

  private static doCourseMappingBEToFE(mapObject) {
    console.log('doCourseMappingBEToFE');
    mapObject.set('id', 'id');
    mapObject.set('isTopRated', 'topRated');
    mapObject.set('name', 'title');
    mapObject.set('description', 'description');
    mapObject.set('date', 'publishedDate');
    mapObject.set('length', 'duration');
    return mapObject;
  }

  private patchCourseBEToClient(oldCourse): CourseModel {
    let newCourse = Object.create(oldCourse);
    _(oldCourse)
      .keys()
      .each((oldKey, idx) => {
        let newKey = this.BE_MISTAKES_MAPPING.has(oldKey) ?
          this.BE_MISTAKES_MAPPING.get(oldKey) :
          oldKey;
        newCourse[newKey] = oldCourse[oldKey];
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
