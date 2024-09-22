import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RmgHomeComponent } from './rmg-home/rmg-home.component';
import { RegisterResourceComponent } from './register-resource/register-resource.component';
import { ResourceHomeComponent } from './resource-home/resource-home.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { ViewAllResourcesComponent } from './view-all-resources/view-all-resources.component';
import { AddJDSComponent } from './add-jds/add-jds.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { RemoveResourcesComponent } from './remove-resources/remove-resources.component';
import { NominationsComponent } from './nominations/nominations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RmgHomeComponent,
    RegisterResourceComponent,
    ResourceHomeComponent,
    JobDescriptionComponent,
    EmployeeDashboardComponent,
    ViewAllResourcesComponent,
    AddJDSComponent,
    RemoveResourcesComponent,
    AddResourceComponent,
    NominationsComponent
  ],
  imports: [
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    // ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
