import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { vehicle } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vehicles: vehicle[] = [];
  user = '';

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.user = localStorage.getItem('vehicleManagerToken') as string;
    this.apiService.getVehicles().subscribe(res => {
      this.vehicles = res;
    })
  }
}
