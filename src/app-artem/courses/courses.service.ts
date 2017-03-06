import * as coursesMockData from './courses.api-mock.json';
import { CourseModel } from './course/course.model';

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
}
