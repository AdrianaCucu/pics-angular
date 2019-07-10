import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PicsService {
  API_PATH = 'https://pixabay.com/api/';
  API_KEY = '12992433-ded5787208231f2338f537200';

  API_PICTURES = '';
  API_VIDEOS = 'videos/';

  constructor(private http: HttpClient) {}

  getMedia(type: string, searchParams: string) {
    switch (type) {
      case '/pictures': {
        return this.http.get(
          `${this.API_PATH}${this.API_PICTURES}?key=${
            this.API_KEY
          }&q=${searchParams}`
        );
      }

      case '/videos': {
        return this.http.get(
          `${this.API_PATH}${this.API_VIDEOS}?key=${
            this.API_KEY
          }&q=${searchParams}`
        );
      }
    }
  }
}
