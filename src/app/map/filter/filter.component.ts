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

  selectedCarType = [];
  selectedType = [];
  maxPrice;
  ztp = false;

  filtered = [];

  parkingPlaces = [
    {
      name: 'Parkovisko Eurovea',
      price: 2,
      type: 'indoor',
      carType: "personal",
      left: 500,
      top: 400,
      ztp: true
    },
    {
      name: 'Parkovisko Kamenné námestie',
      price: 0,
      type: 'outdoor',
      carType: "personal", 
      left: 200,
      top: 500,
      ztp: true

    },
    {
      name: 'Parkovisko Aupark',
      price: 3,
      type: 'indoor',
      carType: "personal",
      left: 50,
      top: 50,
      ztp: false

    },
    {
      name: 'Garáž Kamenné námestie',
      price: 0,
      type: 'guarded',
      carType: "personal",
      left: 247,
      top: 213,
      ztp: true
    },
    {
      name: 'Dlhé diely',
      price: 1,
      type: 'outdoor',
      carType: "personal", 
      left: 768,
      top: 432,
      ztp: false
    },
    {
      name: 'Parkovisko Kuhajta',
      price: 1,
      type: 'outdoor',
      carType: "truck",
      left: 768,
      top: 532,
      ztp: true

    },
    {
      name: 'Parkovisko Prasa',
      price: 1,
      type: 'outdoor',
      carType: "truck",
      left: 768,
      top: 632,
      ztp: false

    },
    {
      name: 'Kryté parkovisko Twin City',
      price: 4,
      type: 'guarded',
      carType: "personal",
      left: 100,
      top: 400,
      ztp: true

    },
    {
      name: 'Parkovisko Polus',
      price: 0,
      type: 'indoor',
      carType: "personal",
      left: 200,
      top: 50,
      ztp: true

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
    console.log(this.ztp)

    this.filtered = this.parkingPlaces.filter(
      (place) => {
        if(
          (this.selectedType.length == 0 || this.selectedType.indexOf(place.type) > -1) && 
          (place.price <= this.maxPrice || !this.maxPrice) && 
          (this.selectedCarType.indexOf(place.carType) > -1 || this.selectedCarType.length == 0) && 
          (this.ztp == place.ztp || !this.ztp)) {
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

    this.filter();
  }

  selectedCheckboxCarType(event) {
    if(event.target.checked) {
      this.selectedCarType.push(event.target.value)
    } else {
      this.selectedCarType.splice(this.selectedType.indexOf(event.target.value), 1);
    }

    this.filter();
  }

}
