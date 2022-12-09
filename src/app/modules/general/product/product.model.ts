export interface ProductSpecification {
  color: string;
  weight: string;
  storage: string;
  price: string;
}

export interface Product {
  id: number;
  name: string;
  picture: string;
  specifications: ProductSpecification;
}
