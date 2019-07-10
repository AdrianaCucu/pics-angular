import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})

// Presentation component
export class MediaListComponent {
  @Input() data: any;

  @Input() params: string;
}
