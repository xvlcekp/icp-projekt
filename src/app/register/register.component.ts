import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
