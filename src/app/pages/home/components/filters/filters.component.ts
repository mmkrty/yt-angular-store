import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();

  categories = ['shoes', 'sports'];

  constructor() {}

  ngOnInit() {}

  onShowCategory(category: string): void {
    console.log(category);
    this.showCategory.emit(category);
  }
}
