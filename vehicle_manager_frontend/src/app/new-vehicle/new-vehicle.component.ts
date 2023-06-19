import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {
  id = '';
  name = '';
  brand = '';
  model = '';
  value = 0;
  image: any;

  user = '';

  constructor(private apiService: ApiService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = localStorage.getItem('vehicleManagerToken') as string;
    this.navigation();
    this.activedRoute.queryParams.subscribe(params => {
      if(params['id']){
        this.id = params['id'];
        this.name = params['name'];
        this.brand = params['brand'];
        this.model = params['model'];
        this.value = parseInt(params['value']);
      }
    })
  }

  navigation(){
    if (!this.user){
      this.router.navigate(['login']);
    }
  }

  send(){
    const formData = new FormData();
    formData.append('name', this.name)
    formData.append('brand', this.brand)
    formData.append('model', this.model)
    formData.append('value', `${this.value}`)
    formData.append('image', this.image)

    if(this.id){
      this.apiService.updateVehicle(this.id, formData).subscribe(res => {
        this.router.navigate(['']);
      })
    } else {
      this.apiService.createVehicle(formData).subscribe(res => {
        this.router.navigate(['']);
      })
    }
  }

  processFile(imageInput: any){
    this.image = imageInput.target.files[0]
  }
}
