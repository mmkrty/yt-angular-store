import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product = {
    id: 1,
    title: 'sneakers',
    price: 150,
    category: 'sneakers',
    description: 'sneakers',
    image: 'https://via.placeholder.com/150',
  };

  constructor() {}

  ngOnInit() {}

  onAddToCart() {}
}
