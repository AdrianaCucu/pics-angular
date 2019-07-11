import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() page: number; // the current page
  @Input() totalItems: number; // the total number of items on all pages
  @Input() perPage: number; // the number of items displayed per page
  @Input() contentLoading: boolean; // to know whether the content is being loaded

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  constructor() {}

  onPage(num: number): void {
    this.goPage.emit(num);
  }

  onPrev(): void {
    this.goPrev.emit(true);
  }

  onNext(): void {
    this.goNext.emit(true);
  }

  totalPages(): number {
    return Math.ceil(this.totalItems / this.perPage) || 0;
  }

  lastPage(): boolean {
    return this.perPage * this.page > this.totalItems - 1;
  }

  getPages(): number[] {
    const pages: number[] = [];
    for (let i = 0; i < Math.ceil(this.totalItems / this.perPage); i++) {
      pages.push(i + 1);
    }

    // console.log(pages);

    return pages;
  }
}
