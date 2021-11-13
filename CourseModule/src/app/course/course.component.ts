import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public data: any;

  constructor(public courseService : CourseService) { }

  ngOnInit(): void {
    this.getData();

  }
  deleteRow(x: string){
    this.courseService.deleteData(x).subscribe(
      res => { this.getData() },
      err => this.handleError(err)
    );

  } 

  getData(){
    this.courseService.getData().subscribe(
      res => this.handleResponse(res),
      err => this.handleError(err),
    );
  }

  
  handleResponse(res:any){
    
    this.data = res;
    console.log(this.data);

 }

  handleError(err:any){
    console.log({err});
  }

}

