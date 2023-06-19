import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  user = '';

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('vehicleManagerToken') as string;
    this.navigation();
  }

  signin() {
    this.apiService.login(this.username, this.password).subscribe(res => {
      this.apiService.setUserToken(res.token);
      location.reload();
    })
  }

  navigation(){
    if (this.user){
      this.router.navigate(['']);
    }
  }
}
