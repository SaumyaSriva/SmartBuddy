import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  id!: number;
  name: string | undefined;
  empId: string | undefined;
  emailId: string | undefined;
  password: string | undefined;
  primarySkill: string | undefined;
  secondarySkill: string | undefined;
  role: string | undefined;
  preferredRole: string | undefined; // Added preferredRole field
  isEditMode: boolean = false;

  constructor(private http: HttpClient, private route : ActivatedRoute , private router:Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.fetchData();
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  logout(){
    this.router.navigate(['']);
  }

  private fetchData() {
    this.http.get<any>(`http://localhost:3000/users/${this.id}`)
      .subscribe(data => {
        this.name = data.name;
        this.empId = data.empId;
        this.emailId = data.email;
        this.password = data.password;
        this.primarySkill = data.primarySkill;
        this.secondarySkill = data.secondarySkill;
        this.role = data.role;
        this.preferredRole = data.preferredRole;
      });
  }
  empdash(){
    this.router.navigate(['empDashboard', this.id]);
  }
  jobDesc(){
    this.router.navigate(['jobdesc', this.id]);
  }

  submitForm() {
    console.log('Form submitted!');
    console.log('Name:', this.name);
    console.log('Employee ID:', this.empId);
    console.log('Email ID:', this.emailId);
    console.log('Password:', this.password);
    console.log('Primary Skill:', this.primarySkill);
    console.log('Secondary Skill:', this.secondarySkill);
    console.log('Preferred Role:', this.preferredRole);
    console.log('Role:', this.role);

    if (this.isEditMode) {
      const updatedUser = {
        name: this.name,
        empId: this.empId,
        email: this.emailId,
        password: this.password,
        primarySkill: this.primarySkill,
        secondarySkill: this.secondarySkill,
        role: this.role,
        preferredRole: this.preferredRole
      };

      this.http.put(`http://localhost:3000/users/${this.id}`, updatedUser)
        .subscribe(response => {
          console.log('User updated successfully:', response);
          window.prompt("User updated successfully","Returning to home");
          this.router.navigate([`resourceHome/${this.id}`]);
        });
    }
  }
}
