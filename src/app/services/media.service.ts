import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  PICS_API_PATH: string = 'https://pixabay.com/api/';
  PICS_API_KEY: string = '12992433-ded5787208231f2338f537200';

  YT_PATH: string = 'https://www.googleapis.com/youtube/v3';
  YT_KEY: string = 'AIzaSyDe3CTEv8cNkQR8nTY8cI18Vnb6OiJSMeQ';

  constructor(private http: HttpClient) {}

  getPictures(
    searchParams: string,
    page: number,
    perPage: number
  ): Observable<object> {
    return this.http.get(
      `${this.PICS_API_PATH}?key=${
        this.PICS_API_KEY
      }&q=${searchParams}&page=${page}&per_page=${perPage}`
    );
  }

  getVideos(searchParams: string): Observable<object> {
    return this.http.get(
      `${this.YT_PATH}/search?key=${
        this.YT_KEY
      }&part=snippet&type=video&maxResults=6&videoEmbeddable=true&q=${searchParams}`
    );
  }
}
