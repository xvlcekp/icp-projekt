import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  query = '';
  filteredDst;

  time = {
    fromTime: '',
    fromDay: '',
    untilTime: '',
    untilDay: ''
  };

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        (params) => {
          this.query = params['query'];
        }
      );
  }

  setFiltered(event) {
    this.filteredDst = event;
    console.log(this.filteredDst);
  }

  onOrder(park) {
    this.dataService.order(park, this.time);
  }
}
