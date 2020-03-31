import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';
import {
  Product,
  products,
} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = + params.get('productId');
      this.product = products[productId];
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert("Product added to cart.");
  }

}
