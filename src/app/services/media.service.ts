import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  PICS_API_PATH = 'https://pixabay.com/api/';
  PICS_API_KEY = '12992433-ded5787208231f2338f537200';

  YT_PATH = 'https://www.googleapis.com/youtube/v3';
  YT_KEY = 'AIzaSyDe3CTEv8cNkQR8nTY8cI18Vnb6OiJSMeQ';

  constructor(private http: HttpClient) {}

  getPictures(searchParams: string, page: number) {
    return this.http.get(
      `${this.PICS_API_PATH}?key=${
        this.PICS_API_KEY
      }&q=${searchParams}&page=${page}`
    );
  }

  getVideos(searchParams: string, pageToken: string) {
    // console.log(pageToken);

    if (pageToken === '') {
      return this.http.get(
        `${this.YT_PATH}/search?key=${
          this.YT_KEY
        }&part=snippet&type=video&maxResults=6&videoEmbeddable=true&q=${searchParams}`
      );
    } else {
      return this.http.get(
        `${this.YT_PATH}/search?key=${
          this.YT_KEY
        }&part=snippet&type=video&maxResults=6&videoEmbeddable=true&q=${searchParams}&pageToken=${pageToken}`
      );
    }
  }
}
