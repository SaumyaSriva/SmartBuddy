import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { removeService } from './removeService.service';
import { DataService } from '../register-resource/data.service';

@Component({
  selector: 'app-remove-resources',
  templateUrl: './remove-resources.component.html',
  styleUrls: ['./remove-resources.component.css']
})



export class RemoveResourcesComponent {
[x: string]: any;

  constructor(private router:Router,private removeService: removeService ,private http: HttpClient, private route:ActivatedRoute, private dataService:DataService) {


  }
  tableData:any;
  inputValue: string = '';

  // del(id: any) {

  //   this.dataService.getUser().subscribe((response: any[]) => {
  //     this.tableData = response.filter(item => item.empId === id );
  //   });
  //   console.log(' ID:', this.tableData[0].id);
  //   console.log('Deleting item with ID:', id);
    
  //   this.removeService.deleteResource(this.tableData[0].id).subscribe(
  //     () => {
  //       console.log('Item with ID', id, 'deleted successfully');
  //       alert('Resource deleted successfully');
  //     },
  //     (error: any) => {
  //       console.error('Error deleting item with ID', id, ':', error);
  //       alert('No such Resource found please check ID');
  //     }
  //   );
  // }

  del(id: any) {
    this.dataService.getUser().subscribe((response: any[]) => {
      const matchingItems = response.filter(item => item.empId === id);
  
      if (matchingItems.length === 0) {
        console.warn('No resource found with ID:', id);
        alert('No such resource found. Please check the ID.');
        return;
      }
  
      const resourceId = matchingItems[0].id;
      console.log('Deleting item with ID:', resourceId);
  
      this.removeService.deleteResource(resourceId).subscribe(
        () => {
          console.log('Item with ID', resourceId, 'deleted successfully');
          alert('Resource deleted successfully');
        },
        (error: any) => {
          console.error('Error deleting item with ID', resourceId, ':', error);
          alert('Error deleting resource. Please try again later.');
        }
      );
    });
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
  addjds(){
    this.router.navigate(['addJD']);
  }
  jds(){
    this.router.navigate(['rmgHome']);
  }

  viewNomination(){
    this.router.navigate(['nominations']);
  }
  addResource(){
    this.router.navigate(['addResource']);
  }

}
