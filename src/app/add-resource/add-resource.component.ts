import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../register-resource/data.service';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent {

  formData: FormGroup;

  constructor(private dataService: DataService, private router:Router) {
  this.formData =  new FormGroup({
  name: new FormControl('', Validators.required),
  empId: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required),
  primarySkill: new FormControl('', Validators.required),
  secondarySkill: new FormControl('', Validators.required),
  preferredRole: new FormControl('', Validators.required),
  role: new FormControl('Resource')
});
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl('', Validators.required),
      empId: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      primarySkill: new FormControl('', Validators.required),
      secondarySkill: new FormControl('', Validators.required),
      preferredRole: new FormControl('', Validators.required),
      role: new FormControl('Resource')
    });
  }

  logout(){
    this.router.navigate(['']);
  }
  addjds(){

    this.router.navigate(['addJD']);
  }
  viewRes(){
    this.router.navigate(['viewAllResources']);
  }
  home(){
    this.router.navigate(['rmgHome']);
  }
  viewNomination(){
    this.router.navigate(['nominations']);
  }
  removeResource(){
    this.router.navigate(['removeResource']);
  }

  submitForm(): void {
    if (this.formData.valid) {
      const formValue = this.formData.value;
      this.dataService.addUser(formValue).subscribe((response) => {
        console.log('Data added successfully:', response);
      });
      alert("Added!");
      this.router.navigate(['viewAllResources']);
    } else {
      // Handle form validation errors
      console.log('Invalid form input. Please check the values.');
    }
  }

}
