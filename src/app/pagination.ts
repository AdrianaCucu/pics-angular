export class Pagination {
  page: number = 1;

  constructor(page: number) {
    this.page = page || this.page;
  }

  totalPages() {}

  goToPage(page: number) {}
}
