

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { JDService } from '../job-description/job-descripstion.service';
import { JobDesc } from '../job-description/jobDesc';
import { DataService } from '../register-resource/data.service';



interface Resource {

  department: string;

}





@Component({

  selector: 'app-rmg-home',

  templateUrl: './rmg-home.component.html',

  styleUrls: ['./rmg-home.component.css']

})



export class RmgHomeComponent implements OnInit{



  expandedElement: Resource | null | undefined;
  dataSource!: JobDesc[];


  constructor(private router:Router,private jdService: JDService, private dataService: DataService ,private http: HttpClient, private route:ActivatedRoute) {
    // console.log("Nomination cons",this.nomination);
  }
  ngOnInit(): void {
    this.getJobDescription();
  }



  displayedColumns: string[] = ['JID', 'Title','Account', 'Domain', 'Description' , 'icos'];



addJDS() {
  this.router.navigate(['addJD']);
}

viewRes(){
  this.router.navigate(['viewAllResources']);
}
del(id: number) {
  // Implement your delete logic here
  console.log('Deleting item with ID:', id);
  this.jdService.deleteJobDescription(id).subscribe(
    () => {
      console.log('Item with ID', id, 'deleted successfully');
      this.getJobDescription();
    },
    (error: any) => {
      console.error('Error deleting item with ID', id, ':', error);
    }
  );
}


viewResources(){

  this.router.navigate(['viewAllResources']);

}

removeResource(){
  this.router.navigate(['removeResource']);
}
viewNomination(){
  this.router.navigate(['nominations']);
}



addResources(){

  this.router.navigateByUrl("/addResource");

}


logout(){
  this.router.navigate(['']);
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

}
