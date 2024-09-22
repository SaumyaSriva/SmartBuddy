import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, combineLatest, of, shareReplay, tap, throwError } from 'rxjs';
import { JobDesc, Nomination, UserData } from './jobDesc';

@Injectable({
    providedIn: 'root'
})
export class JDService {

    private url = "http://localhost:3000/jds";

    private userUrl="http://localhost:3000/users";

    constructor(private http: HttpClient){

    }

    getUserById(empId: number):Observable<UserData>{

      const url = `${this.userUrl}/${empId}`;

      return this.http.get<UserData>(url).pipe(
 
       tap(data => console.log('Employee Id :',empId,"->",JSON.stringify(data))),
 
       shareReplay(1),
 
       catchError(this.handleError)
 
      );

    }
    getJobById(jobId : number): Observable<JobDesc>{
      const url = `${this.url}/${jobId}`;
      return this.http.get<JobDesc>(url).pipe(
        tap(data => console.log('Job Id :',jobId,"->",JSON.stringify(data))),
        shareReplay(1),
        catchError(this.handleError)
      );
    }

    getJobDescription(): Observable<JobDesc[]> {

        // if(id === 0) {
    
        //   return of(this.initializeProduct());
    
        // }
    
        const url = `${this.url}`;
    
         return this.http.get<JobDesc[]>(url).pipe(
    
          tap(data => console.log('Product Id ->',JSON.stringify(data))),
    
          shareReplay(1),
    
          catchError(this.handleError)
    
         );
    
      }

      private handleError(err: any): Observable<never> {

        // in a real world app, we may send the server to some remote logging infrastructure
    
        // instead of just logging it to the console
    
        let errorMessage: string;
    
        if (err.error instanceof ErrorEvent) {
    
          // A client-side or network error occurred. Handle it accordingly.
    
          errorMessage = `An error occurred: ${err.error.message}`;
    
        } else {
    
          // The backend returned an unsuccessful response code.
    
          // The response body may contain clues as to what went wrong,
    
          errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    
        }
    
        console.error(err);
    
        return throwError(errorMessage);
    
      }

      deleteJobDescription(id: number): Observable<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete<void>(url).pipe(
          tap(() => console.log(`Job description with ID ${id} deleted successfully`)),
          catchError(this.handleError)
        );
      }
      

}