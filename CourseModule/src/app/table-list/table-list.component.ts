import { Component, OnInit } from '@angular/core';
import { TableListService } from './table-list.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  public data:any;

  constructor(public tablelistservice:TableListService) { }

  ngOnInit() :void{
    this.getData()
  }
  deleteRow(id: any){
    this.tablelistservice.deleteData(id).subscribe(
      res=>{this.getData()},
      (err:any)=>console.log(err)
    );
  }
  getData(){
    this.tablelistservice.getData().subscribe(
      res=>this.handleResponse(res),
      (err:any)=>console.log(err),
    )
  }
  handleResponse(res:any){
    this.data=res;
    console.log(this.data);

  }

}