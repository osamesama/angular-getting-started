import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
} from '@angular/forms';

import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  items: Product[];

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
