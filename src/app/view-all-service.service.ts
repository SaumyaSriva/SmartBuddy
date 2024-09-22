import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewAllServiceService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
