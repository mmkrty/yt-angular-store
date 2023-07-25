import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent implements OnInit {
  @Output() addToCart = new EventEmitter();
  @Input()
  fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'sneakers',
    price: 150,
    category: 'sneakers',
    description: 'sneakers',
    image: 'https://via.placeholder.com/150',
  };

  constructor() {}

  ngOnInit() {}

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
