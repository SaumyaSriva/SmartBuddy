import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobDesc, Nomination, UserData } from '../job-description/jobDesc';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/users';
  private jdUrl = 'http://localhost:3000/jds';
  private nominationUrl ='http://localhost:3000/nomination';

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any[]>(this.apiUrl);
  }

  addUser(user: any) {
    return this.http.post<any>(this.apiUrl, user);
  }

  addJD(jd: any) {
    return this.http.post<any>(this.jdUrl, jd);
  }

  addNomination(nomination:{
    user: UserData;
    jd: JobDesc;
}){
    return this.http.post<{
      user: UserData;
      jd: JobDesc;
  }>(this.nominationUrl,nomination);
  }
}
