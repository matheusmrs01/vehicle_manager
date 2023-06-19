import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vehicles: any[] = [];
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
