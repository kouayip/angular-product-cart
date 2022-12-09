import { Product } from 'src/app/models/Product';

export class CartItrem {
  public total: number;

  constructor(
    public readonly product: Product,
    public price: number,
    public quantity: number
  ) {
    this.total = price * quantity; // Todo: Extract product price value to product specifications
  }
}
