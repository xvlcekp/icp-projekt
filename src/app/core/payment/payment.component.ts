import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  step = 1;
  @Output() closed = new EventEmitter<boolean>();
  @Input('order') order;


  constructor() { }

  ngOnInit() {
  }

  onPayment(form: NgForm) {
    if(form.valid) {
      this.step++;
    }
  }

  onNext() {
    this.step++;
  }

  onClose() {
    this.closed.emit(true);
  }

  onNavigation() {
    this.closed.emit(true);
  }

}
