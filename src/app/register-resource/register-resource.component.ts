import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-resource',
  templateUrl: './register-resource.component.html',
  styleUrls: ['./register-resource.component.css']
})
export class RegisterResourceComponent  {
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

  submitForm(): void {
    if (this.formData.valid) {
      const formValue = this.formData.value;
      this.dataService.addUser(formValue).subscribe((response) => {
        console.log('Data added successfully:', response);
      });
      alert("Registered!");
      this.router.navigate(['']);
    } else {
      // Handle form validation errors
      console.log('Invalid form input. Please check the values.');
    }
  }
}
