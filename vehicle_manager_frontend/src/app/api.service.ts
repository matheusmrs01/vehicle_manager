import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://127.0.0.1:8000';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  key = 'vehicleManagerToken';

  constructor(private httpClient: HttpClient) { }

  login(username: string, senha: string) {
    const body = { 'username': username, 'password': senha };
    return this.httpClient.post<any>(this.API_URL + '/login/', body);
  }

  getVehicles(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_URL + '/vehicle/');
  }

  createVehicle(body: any): Observable<any> {
    return this.httpClient.post(this.API_URL + '/vehicle/', body, {
      headers: this.getHeader()
    });
  }

  updateVehicle(id: string, body: any): Observable<any> {
    return this.httpClient.put(this.API_URL + `/vehicle/${id}/`, body, {
      headers: this.getHeader()
    });
  }

  getHeader() {
    return new HttpHeaders().set('Authorization', localStorage.getItem('vehicleManagerToken') as string)
  }

   // -------------------- LOCAL STORAGE -------------------

   setUserToken(token: string) {
    localStorage.setItem(this.key, `Token ${token}`);
  }

  logout() {
    localStorage.removeItem(this.key);
  }
}
