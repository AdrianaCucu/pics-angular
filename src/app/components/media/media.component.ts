import { Component } from '@angular/core';

import { PicsService } from 'src/app/services/pics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  data: any;

  routeParams: any;

  constructor(private picsService: PicsService, private router: Router) {
    this.routeParams = router.url;
    // console.log(this.routeParams);
  }

  getMedia(search: string) {
    this.picsService.getMedia(this.routeParams, search).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
}
