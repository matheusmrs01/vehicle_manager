import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = '';

  ngOnInit() {
    this.searchUser();
  }

  searchUser(){
    this.user = localStorage.getItem('vehicleManagerToken') as string;
  }

  logout(){
    localStorage.removeItem('vehicleManagerToken');
    this.user = '';
    location.reload();
  }
}
