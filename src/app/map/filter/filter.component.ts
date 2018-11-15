import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output('chosenParkplace') chosenParkplace = new EventEmitter();
  @Output('places') places = new EventEmitter();
  @Input('time') time;

  selectedType = [];
  maxPrice;

  filtered = [];

  parkingPlaces = [
    {
      name: 'Parkovisko Eurovea',
      price: 2,
      type: 'indoor',
      left: 500,
      top: 400
    },
    {
      name: 'Parkovisko Kamenné námestie',
      price: 0,
      type: 'outdoor',
      left: 200,
      top: 500
    },
    {
      name: 'Parkovisko Aupark',
      price: 3,
      type: 'indoor',
      left: 50,
      top: 50
    },
    {
      name: 'Garáž Kamenné námestie',
      price: 0,
      type: 'guarded',
      left: 247,
      top: 213
    },
    {
      name: 'Dlhé diely',
      price: 1,
      type: 'outdoor',
      left: 768,
      top: 432
    },
    {
      name: 'Parkovisko Kuhajta',
      price: 1,
      type: 'outdoor',
      left: 768,
      top: 532
    },
    {
      name: 'Parkovisko Prasa',
      price: 1,
      type: 'outdoor',
      left: 768,
      top: 632
    },
    {
      name: 'Kryté parkovisko Twin City',
      price: 4,
      type: 'guarded',
      left: 100,
      top: 400
    },
    {
      name: 'Parkovisko Polus',
      price: 0,
      type: 'indoor',
      left: 200,
      top: 50
    }
  ]

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.filter()
  }

  onOrder(park) {
    const user = window.localStorage.getItem("logedUser");

    if(user) this.dataService.order(park, this.time);
    else this.dataService.loginModal();
  }

  filter() {

    this.filtered = this.parkingPlaces.filter(
      (place) => {
        if((this.selectedType.length == 0 || this.selectedType.indexOf(place.type) > -1) && (place.price <= this.maxPrice || !this.maxPrice)) {
          return place;
        }
      }
    );

    this.places.emit(this.filtered);
  }

  setPrice(event) {
    console.log(event.target.value)
    this.maxPrice = event.target.value;

    this.filter()
  }

  selectCheckbox(event) {
    if(event.target.checked) {
      this.selectedType.push(event.target.value)
    } else {
      this.selectedType.splice(this.selectedType.indexOf(event.target.value), 1);
    }

    this.filter()
  }

}
