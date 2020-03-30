import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = + params.get('productId');
      this.product = products[productId];
    });
  }

}
