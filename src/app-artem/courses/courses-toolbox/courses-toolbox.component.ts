import { Component } from '@angular/core';

@Component({
  selector: 'courses-toolbox',
  styleUrls: ['courses-toolbox.component.scss'],
  templateUrl: 'courses-toolbox.component.html'
})
export class CoursesToolboxComponent {
  public searchQuery: string;
  constructor() {
    console.log('CoursesToolboxComponent initied');
  }

  public find() {
    console.log(this.searchQuery);
  }
}
