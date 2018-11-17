import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  registered = false;
  info = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.info = form.value;
    this.registered = true;
  }

}
