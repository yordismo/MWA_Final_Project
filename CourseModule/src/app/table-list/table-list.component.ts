import { Component, OnInit } from '@angular/core';
import { TableListService } from './table-list.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  public data: any;

  constructor(private tableservice) { };

  ngOnInit(): void {
    this.getData();

  }
  deleteRow(id: string) {
    this.tableservice.deleteData(id).subscribe(
      res => { this.getData() },
      err => this.handleError(err)
    );

  }

  getData() {
    this.tableservice.getData().subscribe(
      res => this.handleResponse(res),
      err => this.handleError(err),
    );
  }
  addRow() { }
  editRow(id: string) { }

  handleResponse(res: any) {
    this.data = res;
    console.log(this.data);
  }

  handleError(err: any) {
    console.log({ err });
  }

}
