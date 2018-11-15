import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  madeOrder = new Subject();
  openLoginModal = new Subject();

  constructor() { }

  order(park, time) {
    const order = {
      park,
      time
    };

    this.madeOrder.next(order);
  }

  loginModal() {
    this.openLoginModal.next();
  }
}
