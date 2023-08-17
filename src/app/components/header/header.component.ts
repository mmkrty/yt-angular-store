import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private _cart: Cart = {items: []};
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  } 

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items
      .map((items) => items.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  constructor() { }

}
