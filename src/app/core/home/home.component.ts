import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  destination;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event) {
    if(event.code == "Enter") {
      this.router.navigate(['map'], { queryParams: { query: this.destination } } );
    }
  }

}
