import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://127.0.0.1:8000';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public user = null;

  constructor(private httpClient: HttpClient) { }

  async login(username: string, senha: string) {
    const body = { 'username': username, 'password': senha };
    return this.httpClient.post<any>(this.API_URL + '/login/', body);
  }

  getVehicles(): Observable<any> {
    return this.httpClient.get<any[]>(this.API_URL + '/vehicle/');
  }
}
