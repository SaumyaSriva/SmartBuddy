import { Component } from '@angular/core';
import { NominationServiceService } from '../nomination-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.css']
})
export class NominationsComponent {

  constructor(private nominationservice: NominationServiceService , private route : ActivatedRoute , private router:Router) {}

  tableData: any;

  ngOnInit() {
    this.foo();
  }

  inputValue: string = ''; // Property to store the input value


  foo() {
    this.nominationservice.getUser().subscribe((response: any[]) => {
      this.tableData = response;
      console.log(this.tableData);
    });
    // this.nominationservice.getUser().subscribe((response: any[]) => {

    //   this.tableData = response.filter(item => item.role === this.inputValue);

    //   console.log(this.tableData);

    // });
  }

  onButtonClick(){
      this.nominationservice.getUser().subscribe((response: any[]) => {

      console.log(this.inputValue);
      this.tableData = response.filter(item => item.jd.Account.toLowerCase().includes(this.inputValue.toLowerCase())  );

      console.log(this.tableData);

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableData.filter = filterValue.trim().toLowerCase();
  }
  jds(){
    this.router.navigate(['rmgHome']);
  }
  logout(){
    this.router.navigate(['']);
  }
  addjds(){
    this.router.navigate(['addJD']);
  }
  addres(){
    this.router.navigate(['addResource']);
  }
  home(){
    this.router.navigate(['rmgHome']);
  }
  removeResource(){
    this.router.navigate(['removeResource']);
  }

}
