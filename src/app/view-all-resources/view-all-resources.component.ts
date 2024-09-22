import { Component } from '@angular/core';
import { ViewAllServiceService } from '../view-all-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-all-resources',
  templateUrl: './view-all-resources.component.html',
  styleUrls: ['./view-all-resources.component.css'],
})
export class ViewAllResourcesComponent {
  constructor(private dataService: ViewAllServiceService , private route : ActivatedRoute , private router:Router) {}

  tableData: any;

  ngOnInit() {
    this.foo();
  }

  foo() {
    this.dataService.getUser().subscribe((response: any[]) => {

      this.tableData = response.filter(item => item.role === 'Resource');

      console.log(this.tableData);

    });

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
  viewNomination(){
    this.router.navigate(['nominations']);
  }
  removeResource(){
    this.router.navigate(['removeResource']);
  }
}
