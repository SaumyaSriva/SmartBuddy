import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { DataService } from '../register-resource/data.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {
  
 
myForm: FormGroup;
  
selectedRole: any;

users :any;
data:any;



email:string="";
password:string ="";
errorMsg="";
invalidLogin = false;
selectedOption="";

hide = true;
role:string=this.selectedOption;
constructor(private router:Router, private dataService: DataService) { 
  this.myForm= new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',Validators.required),
  })
}
ngOnit(): void {
  this.myForm = new FormGroup({
    userinput: new FormControl('', Validators.required),
    email: new FormControl(['', [Validators.required, Validators.email]]),
    number : new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/)])
  });

}

selected = 'Resource';

checkLogin() {
  console.log(this.email);
  console.log(this.password);
  console.log(this.selected);
  this.dataService.getUser().subscribe((response: any[]) => {
    if (response.length > 0) {
      for(let x =0; x<response.length; x++){
        this.data= response[x];
        if(this.data.email == this.email){
          break;
        }
      }
      if(this.data.email == this.email && this.data.password == this.password && this.data.role== this.selected){
          if(this.data.role=="Supervisor"){
            this.router.navigate(['rmgHome']);
          }
          else{
            this.router.navigate(['resourceHome', this.data.id]);
          }
      }
      else{
        alert("login failed")
      }
    }
  });

  

}

}
