import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartItrem } from './cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  updateCart(product: Product, qtyImpact: number) {
    this.cartService.updateCart(product, qtyImpact);
  }
}
