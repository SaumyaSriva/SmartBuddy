import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router,  ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { combineLatest, map, Observable } from 'rxjs';
import { DataService } from '../register-resource/data.service';
import { JDService } from './job-descripstion.service';
import { JobDesc, Nomination, UserData } from './jobDesc';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
}) 
export class JobDescriptionComponent implements OnInit  {

  dataSource!: JobDesc[];

  displayedColumns: string[] = ['Title', 'Domain', 'Account'];

  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: JobDesc | null | undefined;

  // dataSource = ELEMENT_DATA;

  jobDetail!: JobDesc;
  jobDetailId = 0;
  userDetail!: UserData;
  nomination!: {
    user: UserData;
    jd: JobDesc;
};
  jobTitle: String ="";
  empName: String="";
  constructor(private router:Router,private jdService: JDService, private dataService: DataService ,private http: HttpClient, private route:ActivatedRoute) {
    console.log("Nomination cons",this.nomination);
  }
  ngOnInit(){
    // this.getJDById(1)
    //this.setNomination();
     this.getJobDescription();
    // this.getUserById(1);
    // this.getNomination(1,1);
    
  //  this.applyToJD$.subscribe(
  //   (response) => {
  //     this.nomination = response;
  //     console.log("Nomination ngoni",this.nomination)
  //   }
  //  );

   this.verify();
  }

  public getJDById(id: number): JobDesc {
    this.jdService.getJobById(id).subscribe(
      (response: JobDesc) => {
        this.jobDetail = response;
      }
     )
     return this.jobDetail;
  }

  getUser$!: Observable<UserData>; 

  getJD$!: Observable<JobDesc>; 

  applyToJD$!: Observable<{
    user: UserData;
    jd: JobDesc;
}>

//  public setNomination(): void {
//   this.applyToJD$.subscribe(
//     (response) => {
//       // this.nomination.userData = response.user as UserData;
//       // this.nomination.jobDesc = response.jd as JobDesc;
      
//         this.nomination = response;
//       console.log("response",response);
//       console.log("Nomination",this.nomination);
//     }
//   )
//  }

 public verify(): void {
  console.log("verification",this.nomination);
 }
 
 public logout():void{
  this.router.navigate(['']);
 }
  public getUserById(id: number): UserData {
    this.jdService.getUserById(id).subscribe(
      (response: UserData) => {
        this.userDetail = response;
      }
     )
     return this.userDetail;
  }

  applyNomination(id: number){
    this.jobDetailId = id;
    console.log("job id",this.jobDetailId);

    this.getUser$ = this.jdService.getUserById(this.route.snapshot.params['id']);

    this.getJD$ = this.jdService.getJobById(id);

    this.applyToJD$ = combineLatest([
      this.getUser$,
      this.getJD$
   ]).pipe(
    map(([user, jd]) => ({ user, jd }))
   );

    this.applyToJD$.subscribe(
      (response) => {
        this.nomination = response;
        this.dataService.addNomination(this.nomination).subscribe(
          (response) => {
            console.log("data service add nomination",response);
          }
        );
        console.log("Nomination ngoni",this.nomination);
      }
     );

     alert("done");
  }

  public getJobDescription(): void {

    this.jdService.getJobDescription().subscribe(

      (response: JobDesc[]) => {

        this.dataSource = response;

      },

      (error: HttpErrorResponse) => {

        alert(error.message);

      }

    )

  }
  empdash(){
    this.router.navigate(['empDashboard', this.route.snapshot.params['id']]);
  }
  jobDesc(){
    this.router.navigate(['jobdesc', this.route.snapshot.params['id']]);
  }
  dataSource1 = new MatTableDataSource(this.dataSource);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
  }
  // public getUserData(): void {

  //   this.jdService.getUserById().subscribe(

  //     (response: JobDesc[]) => {

  //       this.dataSource = response;

  //     },

  //     (error: HttpErrorResponse) => {

  //       alert(error.message);

  //     }

  //   )

  // }
  
