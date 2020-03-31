import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../cart.service';

interface ShippingPrice {

  type: string;

  price: number;

}

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {

  shippingPrices: Observable<ShippingPrice>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shippingPrices = this.cartService.getShippingPrices() as Observable<ShippingPrice>;
  }

}
