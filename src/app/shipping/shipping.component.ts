import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../cart.service';

interface ShippingCost {

  type: string;

  price: number;

}

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {

  shippingCosts: Observable<ShippingCost>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices() as Observable<ShippingCost>;
  }

}
