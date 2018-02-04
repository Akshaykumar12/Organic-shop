import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Order } from '../../../shared/models/order';
import { Router } from '@angular/router';
import { ShoppingCart } from '../../../shared/models/shopping-cart';


@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  userId: string;
  userSubscription: Subscription;

  constructor(
    private route: Router,
    private authService: AuthService,
    private orderService: OrderService
  ) { }

  async ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder(shipping) {
    let order = new Order(this.userId, shipping, this.cart);
    console.log(order);
    let result = await this.orderService.placeOrder(order);
    this.route.navigate(['/order-success', result.key]);
  }

}
