import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartItrem } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItrem[] = [];

  addToCart(product: Product) {
    const cartProductIndex = this.cartItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (cartProductIndex === -1) {
      const priceString = product.specifications.price.replace('$', '');
      const price = parseFloat(priceString);

      this.cartItems.push({
        product: product,
        quantity: 1,
        price,
        total: price,
      });
    } else {
      const quantity = this.cartItems[cartProductIndex].quantity + 1;

      this.cartItems[cartProductIndex].quantity = quantity;
      this.cartItems[cartProductIndex].total =
        quantity * this.cartItems[cartProductIndex].price;
    }
  }

  updateCart(product: Product, qtyImpact: number) {
    const cartProductIndex = this.cartItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (cartProductIndex !== -1) {
      const quantity = this.cartItems[cartProductIndex].quantity + qtyImpact;

      if (quantity > 0) {
        this.cartItems[cartProductIndex].quantity = quantity;
        this.cartItems[cartProductIndex].total =
          quantity * this.cartItems[cartProductIndex].price;
      }
    }
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
