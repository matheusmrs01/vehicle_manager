import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user = null;

  ngOnInit() {
    this.searchUser();
  }

  searchUser(){
    // this.user = buscar no local storage;
  }
}
