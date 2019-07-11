import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  data: any;

  routeParams: any;

  constructor(private mediaService: MediaService, private router: Router) {
    this.routeParams = router.url;
    console.log(this.routeParams);
  }

  getMedia(search: string) {
    this.mediaService.getMedia(this.routeParams, search).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
}
