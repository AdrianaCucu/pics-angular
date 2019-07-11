import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() searchEvent = new EventEmitter();

  enterSearch(event) {
    this.searchEvent.emit(event.target.value);
  }
}
