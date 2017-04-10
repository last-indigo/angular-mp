import { Pipe, PipeTransform } from '@angular/core';
import { CourseModel } from './course/course.model';

@Pipe({
  name: 'myOrderBy',
  pure: false
})
export class MyOrderByPipe implements PipeTransform {
  public transform(oldArray: CourseModel[]): CourseModel[] {
    if (!oldArray) {
      // need this check, otherwise app breaks
      return [];
    }

    const result = oldArray.sort((a: CourseModel, b: CourseModel) => {
      return (+new Date(b.publishedDate)) - (+new Date(a.publishedDate));

      // return new Date(a.publishedDate) < new Date(b.publishedDate);
      //
      // TS2345: Argument of type '(a: CourseModel, b: CourseModel) => boolean'
      // is not assignable to parameter of type '(a: CourseModel, b: CourseModel) => number'.
      // Type 'boolean' is not assignable to type 'number'
      // http://stackoverflow.com/questions/21687907/typescript-sorting-an-array
    });
    return result;
  }
}
