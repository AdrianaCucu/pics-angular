import { MediaService } from './services/media.service';
import { Observable } from 'rxjs';

export class Pagination {
  page: number = 1;
  totalItems: number = 200;
  perPage: number = 6;
  offset: number = 2;
  input: string = '';

  apiService: any;

  constructor(
    apiService: any,
    page?: number,
    totalItems?: number,
    perPage?: number
  ) {
    this.apiService = apiService;
    this.page = page || this.page;
    this.totalItems = totalItems || this.totalItems;
    this.perPage = perPage || this.perPage;
  }

  getData(type: string): Observable<object> {
    if (this.apiService instanceof MediaService) {
      if (type === 'pictures') {
        return this.apiService.getPictures(this.input, this.page, this.perPage);
      } else if (type === 'videos') {
        return this.apiService.getVideos(this.input);
      }
    }
  }

  update(page?: number, totalItems?: number, perPage?: number): void {
    this.page = page || this.page;
    this.totalItems = totalItems || this.totalItems;
    this.perPage = perPage || this.perPage;
  }

  updateInput(input: string): void {
    if (input !== this.input) {
      this.input = input;
      this.page = 1;
    }
  }

  goToPage(page: number): void {
    this.page = page;
  }

  onPrev(): void {
    this.page--;
  }

  onNext(): void {
    this.page++;
  }

  totalPages(): number {
    return Math.ceil(this.totalItems / this.perPage) || 0;
  }

  lastPage(): boolean {
    return this.perPage * this.page > this.totalItems - 1;
  }

  getLastPage(): number {
    return Math.ceil(this.totalItems / this.perPage);
  }

  getPages(): string | number[] {
    const pages: any[] = [];
    // console.log(this.page);

    if (this.page === 1 || this.page === 2) {
      pages.push(...[1, 2, 3, 4, '...', this.getLastPage()]);
    } else if (this.lastPage()) {
      pages.push(
        ...[1, '...', this.page - 3, this.page - 2, this.page - 1, this.page]
      );
    } else {
      pages.push(...[1, '...']);
      for (
        let i = this.page - this.offset;
        i < this.page + this.offset - 1;
        i++
      ) {
        pages.push(i + 1);
      }
      pages.push(...['...', this.getLastPage()]);
    }

    // console.log(pages);

    return pages;
  }
}
