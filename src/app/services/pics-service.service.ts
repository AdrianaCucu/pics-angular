import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PicsServiceService {
  API_PATH = 'https://pixabay.com/api/';
  API_KEY = '12992433-ded5787208231f2338f537200';

  API_PICTURES = '';
  API_VIDEOS = 'videos/';

  constructor(private http: HttpClient) {}
}
