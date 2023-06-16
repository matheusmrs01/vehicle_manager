import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vehicles: any[] = [];
  user = null;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getVehicles().subscribe((result) => {
      this.vehicles = result
      console.log(result);
    }, error => {
      console.log(error)
    });
  }
}
