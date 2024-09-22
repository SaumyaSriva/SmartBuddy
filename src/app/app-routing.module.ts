import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule} from "@angular/forms";
import { RmgHomeComponent } from './rmg-home/rmg-home.component';
import { RegisterResourceComponent } from './register-resource/register-resource.component';
import { ResourceHomeComponent } from './resource-home/resource-home.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ViewAllResourcesComponent } from './view-all-resources/view-all-resources.component';
import { AddJDSComponent } from './add-jds/add-jds.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { RemoveResourcesComponent } from './remove-resources/remove-resources.component';
import { NominationsComponent } from './nominations/nominations.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'rmgHome', component:RmgHomeComponent},
  {path:'register', component:RegisterResourceComponent},
  {path:'resourceHome/:id',component:ResourceHomeComponent},
  {path:'jobdesc/:id',component:JobDescriptionComponent},
  {path:'empDashboard/:id', component:EmployeeDashboardComponent},
  {path:'viewAllResources',component:ViewAllResourcesComponent },
  {path:'addJD', component:AddJDSComponent},
  {path:'addResource', component:AddResourceComponent},
  {path: 'removeResource', component:RemoveResourcesComponent},
  {path:'nominations', component:NominationsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
