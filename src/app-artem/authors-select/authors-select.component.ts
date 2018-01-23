import { Component, Input } from '@angular/core';
@Component({
  selector: 'authors-select',
  templateUrl: './authors-select.component.html'
})
export class AuthorsSelectComponent {
  @Input() public people: Array<{name: string, checked: boolean}>;
}
