import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginOpened = false;
  paymentOpened = false;
  order;

  user;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.user = window.localStorage.getItem("logedUser");

    this.dataService.madeOrder
      .subscribe(
        (order) => {
          this.order = order;
          this.paymentOpened = true;
          this.loginOpened = false;
        }
      );
    
    this.dataService.openLoginModal
      .subscribe(
        () => {
          this.loginOpened = true;
          this.paymentOpened = false;
        }
      )
  }

  login(event) {
    this.user = event;
  }

  logout() {
    this.user = null;
    window.localStorage.removeItem('logedUser');
  }

}
