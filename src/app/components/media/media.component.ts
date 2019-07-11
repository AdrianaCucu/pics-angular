import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  data: any;
  selectedVideo: any;

  routeParams: any;

  constructor(
    private mediaService: MediaService,
    private router: Router,
    private sanitiser: DomSanitizer
  ) {
    this.routeParams = router.url;
    // console.log(this.routeParams);
    this.getMedia('');
  }

  getMedia(search: string) {
    this.mediaService.getMedia(this.routeParams, search).subscribe(data => {
      this.data = data;
      // console.log(this.data);
      if (this.routeParams === '/videos') {
        this.selectVideo(this.data.items[0]);
      }
    });
  }

  selectVideo(video) {
    // console.log(video);
    this.selectedVideo = video;
  }

  getVideoUrl() {
    return this.sanitiser.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`
    );
  }
}
