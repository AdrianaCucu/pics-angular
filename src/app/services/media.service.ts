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

  userFiles: any[] = localStorage.getItem('userFiles')
    ? JSON.parse(localStorage.getItem('userFiles'))
    : ['', '', '', '', '', ''];

  constructor(private http: HttpClient) {}

  getUserFiles(): string[] {
    // console.log(this.userFiles);
    return this.userFiles;
  }

  // Converts the file to base 64 to store in localStorage.
  getBase64(file: File, index: number): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      // console.log(result);
      this.userFiles[index] = result;
      // console.log(this.userFiles);

      localStorage.setItem('userFiles', JSON.stringify(this.userFiles));
      // console.log(localStorage.getItem('userFiles'));
    };
    reader.onerror = error => {
      console.log('Error:', error);
    };
  }

  updateUserFiles(file: File, index: number): void {
    this.getBase64(file, index);
  }

  deleteUserFile(index: number): void {
    this.userFiles[index] = '';
    localStorage.setItem('userFiles', JSON.stringify(this.userFiles));
  }

  getPictures(
    input: string,
    page: number,
    perPage: number
  ): Observable<object> {
    return this.http.get(
      `${this.PICS_API_PATH}?key=${
        this.PICS_API_KEY
      }&q=${input}&page=${page}&per_page=${perPage}`
    );
  }

  getVideos(input: string): Observable<object> {
    return this.http.get(
      `${this.YT_PATH}/search?key=${
        this.YT_KEY
      }&part=snippet&type=video&maxResults=6&videoEmbeddable=true&q=${input}`
    );
  }
}
