import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() searchEvent = new EventEmitter();

  queryParam: string;

  enterSearch(event) {
    this.queryParam = event.target.value;
    this.searchEvent.emit(event.target.value);
  }
}
