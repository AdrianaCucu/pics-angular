import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  pictures: [];
  videos: [];
  routeParams: any;

  queryParams: string; // the user input

  selectedVideo: any;

  page = 1;
  total = 0;
  limit = 5;
  contentLoading = false;

  constructor(
    private mediaService: MediaService,
    private router: Router,
    private sanitiser: DomSanitizer
  ) {
    this.routeParams = router.url;
    // console.log(this.routeParams);

    this.getMedia('');
  }

  getMedia(queryParams: string) {
    this.queryParams = queryParams;
    if (this.routeParams.includes('pictures')) {
      this.getPictures();
      this.router.navigate(['/pictures'], {
        queryParams: { q: queryParams, page: this.page }
      });
    } else if (this.routeParams.includes('videos')) {
      this.getVideos();
      this.router.navigate(['/videos'], {
        queryParams: { q: queryParams }
      });
    }
  }

  getPictures(): void {
    this.contentLoading = true;
    this.mediaService
      .getPictures(this.queryParams, this.page)
      .subscribe(data => {
        this.pictures = data['hits'];
        // console.log(data);
        this.total = 200;
        this.limit = this.pictures.length;
        this.contentLoading = false;
      });
  }

  getVideos(): void {
    this.contentLoading = true;
    this.mediaService.getVideos(this.queryParams).subscribe(data => {
      this.videos = data['items'];
      // console.log(data);
      this.selectVideo(this.videos[0]);
      this.total = this.videos.length;
      // console.log('video total', this.total);
      this.contentLoading = false;
    });
  }

  selectVideo(video): void {
    // console.log(video);
    this.selectedVideo = video;
  }

  getVideoUrl(): SafeResourceUrl {
    if (this.selectedVideo) {
      return this.sanitiser.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`
      );
    }
  }

  goToPage(num: number): void {
    this.page = num;
    this.getMedia(this.queryParams);
  }

  nextPage(): void {
    this.page++;
    this.getMedia(this.queryParams);
  }

  prevPage(): void {
    this.page--;
    this.getMedia(this.queryParams);
  }
}
