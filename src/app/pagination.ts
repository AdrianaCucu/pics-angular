import { stringify } from 'querystring';

export class Pagination {
  page: number = 1;
  totalItems: number = 200;
  perPage: number = 5;
  offset: number = 2;

  constructor(page?: number, totalItems?: number, perPage?: number) {
    this.page = page || this.page;
    this.totalItems = totalItems || this.totalItems;
    this.perPage = perPage || this.perPage;
  }

  update(page?: number, totalItems?: number, perPage?: number) {
    this.page = page || this.page;
    this.totalItems = totalItems || this.totalItems;
    this.perPage = perPage || this.perPage;
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
