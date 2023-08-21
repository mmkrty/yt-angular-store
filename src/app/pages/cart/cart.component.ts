import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'sneakers',
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'sneakers',
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'sneakers',
        price: 150,
        quantity: 1,
        id: 1,
      },
    ],
  };
  dataSource: CartItem[] = [];
  displayedColumns: string[] = ['product', 'name', 'price', 'quantity', 'total', 'action'];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.dataSource = this.cart.items;
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }
}
