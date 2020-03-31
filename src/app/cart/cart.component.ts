import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
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

  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = formBuilder.group({
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
