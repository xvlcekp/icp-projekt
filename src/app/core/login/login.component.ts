import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  } from 'events';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() closed = new EventEmitter<boolean>();
  @Output() login = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClose() {
    this.closed.emit(true);
  }

  onLogin(form: NgForm) {
    if(form.valid) {
      window.localStorage.setItem("logedUser", form.value.username);
      this.router.navigate(['map']);
      this.closed.emit(true);
      this.login.emit(form.value.username);
    }
  }

}
