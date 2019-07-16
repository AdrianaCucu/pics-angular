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
  pictures: any[];
  videos: any[];
  routeParams: string;

  input: string; // the user input

  selectedVideo: any;

  contentLoading: boolean = false;

  pagination: Pagination;

  constructor(
    private mediaService: MediaService,
    private router: Router,
    private sanitiser: DomSanitizer
  ) {
    this.routeParams = router.url;
    // console.log(this.routeParams);

    this.pagination = new Pagination(mediaService);

    this.getMedia('');
  }

  getMedia(input: string): void {
    this.input = input;
    this.pagination.updateInput(this.input);

    if (this.routeParams.includes('pictures')) {
      this.getPictures();
    } else if (this.routeParams.includes('videos')) {
      this.getVideos();
    }
  }

  getPictures(): void {
    this.contentLoading = true;
    this.pagination.getData('pictures').subscribe(data => {
      data ? (this.pictures = data['hits']) : (this.pictures = []);
      // console.log(data);
      // console.log(this.pictures)
      this.pagination.update(undefined, data['totalHits'], undefined);
      // console.log(this.pagination);
      this.contentLoading = false;
    });

    this.router.navigate(['/pictures'], {
      queryParams: { q: this.input, page: this.pagination.page }
    });
  }

  getVideos(): void {
    this.contentLoading = true;

    this.pagination.getData('videos').subscribe(data => {
      data ? (this.videos = data['items']) : (this.videos = []);
      // console.log(data);
      // console.log(this.videos)

      if (this.videos.length !== 0) {
        this.selectVideo(this.videos[0]);
      }

      this.contentLoading = false;
    });

    this.router.navigate(['/videos'], {
      queryParams: { q: this.input }
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
