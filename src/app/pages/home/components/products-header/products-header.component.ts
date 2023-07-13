import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css'],
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 0;

  constructor() {}

  ngOnInit() {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(cols: number): void {
    this.columnsCountChange.emit(cols);
  }
}
