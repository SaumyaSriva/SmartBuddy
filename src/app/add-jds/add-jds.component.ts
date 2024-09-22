import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../register-resource/data.service';

@Component({
  selector: 'app-add-jds',
  templateUrl: './add-jds.component.html',
  styleUrls: ['./add-jds.component.css'],
})
export class AddJDSComponent implements OnInit {
  formData: FormGroup; // Declare a FormGroup instance
  isEditMode: boolean = false;
  constructor(private formBuilder: FormBuilder,private http: HttpClient , private dataService:DataService, private route : ActivatedRoute , private router:Router) {
    this.formData = this.formBuilder.group({
      Title: ['', Validators.required],       // Initialize form controls with validators
      Account: ['', Validators.required],
      Domain: ['', Validators.required],
      Description: ['', Validators.required],
    });
  }
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      Title: ['', Validators.required],       // Initialize form controls with validators
      Account: ['', Validators.required],
      Domain: ['', Validators.required],
      Description: ['', Validators.required],
    });
  }

  home(){
    this.router.navigate(['rmgHome']);
  }
  logout(){
    this.router.navigate(['']);
  }
  viewResources(){
    this.router.navigate(['viewAllResources']);
  }
  addResources(){
    this.router.navigate(['addResource'])
  }
  viewNomination(){
    this.router.navigate(['nominations']);
  }
  removeResource(){
    this.router.navigate(['removeResource']);
  }
  submitForm() {

    if (this.formData.valid) {
      const formDataValue = this.formData.value; // Get the form values

      // Call the dataService to save the form data
      this.dataService.addJD(formDataValue).subscribe(
        (response: any) => {
          console.log('Data saved successfully:', response);
          // Reset the form after successful submission if needed
          this.formData.reset();
          alert("JD added, Redirecting to Home");
          this.router.navigate(['rmgHome']);
        },
        (error: any) => {
          console.error('Error saving data:', error);
        }
      );
    } else {

      console.log('Form is not valid.');
    }


  }
}
