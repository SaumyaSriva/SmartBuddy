import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';  // Import the necessary operators

@Injectable({
    providedIn: 'root'
})
export class removeService {

  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  deleteResource(empId: String) {
    const url = `${this.apiUrl}/${empId}`;

    return this.http.delete(url).pipe(
      catchError(error => {
        console.error(`Error deleting item with Employee ID ${empId}:`, error);
        throw error; // Rethrow the error to propagate it to the subscriber
      })
    );
  }
}
