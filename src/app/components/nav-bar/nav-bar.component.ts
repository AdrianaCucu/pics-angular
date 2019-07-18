import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() searchEvent = new EventEmitter();

  media: string;

  constructor(private router: Router) {
    if (router.url.startsWith('/pictures')) {
      this.media = 'pictures';
    } else if (router.url.startsWith('/videos')) {
      this.media = 'videos';
    } else if (router.url.startsWith('/add')) {
      this.media = 'add';
    }
  }

  enterSearch(event) {
    this.searchEvent.emit(event.target.value);
  }
}
