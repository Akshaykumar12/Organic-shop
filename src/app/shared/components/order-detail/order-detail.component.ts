import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  id;
  order;

  constructor(router: Router, route: ActivatedRoute, orderService: OrderService) {
    this.id = route.snapshot.paramMap.get('id');
    if (this.id) orderService.getOrderById(this.id).subscribe(o => {
      this.order = o;
      console.log(this.order);

    });
  }

  ngOnInit() {
  }

}
