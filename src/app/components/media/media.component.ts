import { Component, OnInit, Input } from '@angular/core';

import { PicsService } from 'src/app/services/pics.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  data: any;

  constructor(private picsService: PicsService) {}

  ngOnInit() {
    this.picsService.getMedia().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  getMedia(search: string) {
    console.log(search);
  }
}
