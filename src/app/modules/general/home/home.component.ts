import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartItrem } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cartItems: CartItrem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
