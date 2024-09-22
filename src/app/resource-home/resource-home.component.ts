import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resource-home',
  templateUrl: './resource-home.component.html',
  styleUrls: ['./resource-home.component.css']
})
export class ResourceHomeComponent {
  data:any;
  title:string=""
  domain: string="";
  requirement : string = "";

  logout(){
    this.router.navigate(['']);
   }
  checkLogin(){
    alert("logging out ");
  }
  constructor(private router:Router, private route: ActivatedRoute){

  }
empdash(){
  this.router.navigate(['empDashboard',this.route.snapshot.params['id']]);
}
jobDesc(){
  this.router.navigate(['jobdesc',this.route.snapshot.params['id']]);
}
removeResource(){
  this.router.navigate(['removeResource']);
}

}
