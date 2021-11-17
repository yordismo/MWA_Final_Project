import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'app/auth/_services/token-storage.service';
import { TableListService } from 'app/table-list/table-list.service';

@Component({
  selector: 'app-detailed-course',
  templateUrl: './detailed-course.component.html',
  styleUrls: ['./detailed-course.component.scss']
})
export class DetailedCourseComponent implements OnInit {
  id : any; 
  data :any; 
  constructor(    private activeatedRouter: ActivatedRoute,public tablelistservice:TableListService,private tokenStorage: TokenStorageService,private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.id = this.activeatedRouter.snapshot.paramMap.get("id");
    this.getDataById(this.id);
  }

  getDataById(id:any){
    this.tablelistservice.getDataById(id).subscribe(
      res=>this.handleResponse(res),
      (err:any)=>console.log(err),
    )
  }

  handleResponse(res:any){
    this.data=res;
    
    console.log(this.data);

  }
}
