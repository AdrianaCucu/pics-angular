import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MediaService } from 'src/app/services/media.service';

import { Pagination } from 'src/app/pagination';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  pictures: any;
  videos: any;
  routeParams: any;

  queryParams: string; // the user input

  selectedVideo: any;

  contentLoading = false;

  pagination: Pagination = new Pagination();

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
    } else if (this.routeParams.includes('videos')) {
      this.getVideos();
    }
  }

  getPictures(): void {
    this.contentLoading = true;
    this.mediaService
      .getPictures(
        this.queryParams,
        this.pagination.page,
        this.pagination.perPage
      )
      .subscribe(data => {
        data ? (this.pictures = data['hits']) : (this.pictures = []);
        // console.log(data);
        // console.log(this.pictures)
        this.pagination.update(undefined, data['totalHits'], undefined);
        // console.log(this.pagination);
        this.contentLoading = false;
      });

    this.router.navigate(['/pictures'], {
      queryParams: { q: this.queryParams, page: this.pagination.page }
    });
  }

  getVideos(): void {
    this.contentLoading = true;
    this.mediaService.getVideos(this.queryParams).subscribe(data => {
      this.videos = data['items'];
      // console.log(data);

      this.videos.length
        ? this.selectVideo(this.videos[0])
        : this.selectVideo({});
      // console.log(this.videos.length);

      this.contentLoading = false;
    });

    this.router.navigate(['/videos'], {
      queryParams: { q: this.queryParams }
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
}
