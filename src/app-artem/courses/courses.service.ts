import { Http, RequestOptions, URLSearchParams, Response, Request, RequestMethod } from '@angular/http';

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

  private COURSES_URL: string = `${this.baseUrl}/courses`;

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
    return this.http.get(this.COURSES_URL)
      .map((response: Response) => response.json())
      .map((list: CourseModel[]) => {
        const result = list.map((course: CourseModel) => {
          return this.patchCourseBEToClient(course);
        });

        this.coursesList = result;
        return result;
      });
  }

  // #7. Map response shape to corresponding interface.
  private static doCourseMappingBEToFE(mapObject: Map<string, string>) {
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
    //noinspection TypeScriptUnresolvedFunction
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

  public createCourse(rawModel: CourseModel): Observable<CourseModel> {
    // TODO: convert FE model to BE model
    return this.http.post(this.COURSES_URL, rawModel)
      .map((response: Response) => {
        console.warn('createCourse success');
        return response.json();
      });
  }

  // TODO: to return    : Observable<CourseModel>
  public updateCourseById(id: string, patch: any) {
    // $http.patch()

    // return Observable.from(null);
    return Observable.of(null);
  }

  public getCourseById(id: string): Observable<CourseModel> {
    return this.http.get(`${this.COURSES_URL}/${id}`)
      .map((response: Response) => response.json())
      .map((course: CourseModel) => {
        return this.patchCourseBEToClient(course);
      });
  }

  public searchCoursesByQuery(queryString: string): Observable<CourseModel[]> {
    let options = new RequestOptions();
    options.url = this.COURSES_URL;
    options.method = RequestMethod.Get;
    options.search = new URLSearchParams();
    if (queryString) {
      options.search.set('query', queryString);
    }
    return this.http.request(new Request(options))
      .map((response: Response) => {
        return response.json().map((course: CourseModel) => {
          return this.patchCourseBEToClient(course);
        });
      });
  }

  public removeCourseById(id: string): Observable<CourseModel[]> {
    // #5: Add integration for course delete. Recall courses list after delete action
    return this.http.delete(`${this.COURSES_URL}/${id}`)
      .map((response: Response) => {
        console.warn('removeCourseById acknowledged delete');
        return response.json();

        // NOTE: not an array of new courses
        // .map((course: CourseModel) => {
        //   return this.patchCourseBEToClient(course);
        // });
      });
  }
}
