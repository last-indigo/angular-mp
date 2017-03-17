import * as coursesMockData from './courses.api-mock.json';
import { CourseModel } from './course/course.model';
import * as _ from 'lodash';

export class CoursesService {
  private coursesList: CourseModel[];

  constructor() {
    this.coursesList = coursesMockData;
    console.log('CoursesService: constructor() this.coursesList', this.coursesList);
  }

  // TODO: shouldn't this be inferred from the -- private coursesList: CourseModel[] --- ???
  public getCourses(): Promise<CourseModel[]> {
    // imitate async
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.coursesList), 1000);
    });
  }

  /*
   * From task notes: "Do not use http module to solve a task."
   */

  public createCourse(rawModel: CourseModel): Promise<CourseModel> {
    return new Promise((resolve, reject) => {
      // $http.post()

      setTimeout(() => {
        console.warn('createCourse success');
        this.coursesList = [rawModel, ...this.coursesList];
        resolve(rawModel);
      }, 400);
    });
  }

  public updateCourseById(id: string, patch: any): Promise<CourseModel> {
    return new Promise((resolve, reject) => {
      // $http.patch()

    });
  }

  public getCourseById(id: string): Promise<CourseModel> {
    return new Promise((resolve, reject) => {
      // $http.get()

      setTimeout(() => {
        const result = _.find(this.coursesList, {id});
        if (result) {
          console.warn('getCourseById returned item');
          resolve(result);
        } else {
          reject('not found');
        }
      }, 400);
    });
  }

  public removeCourseById(id: string): Promise<CourseModel[]> {
    return new Promise((resolve, reject) => {
      // $http.get()

      setTimeout(() => {
        console.warn('removeCourseById acknowledged delete');
        this.coursesList = _.reject(this.coursesList, {id});
        resolve(this.coursesList);
      }, 400);
    });
  }
}
