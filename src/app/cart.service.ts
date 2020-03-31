import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }

}
