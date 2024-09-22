import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NominationServiceService {
  private apiUrl = 'http://localhost:3000/nomination';
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
