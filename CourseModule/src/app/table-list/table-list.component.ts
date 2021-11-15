import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/auth/_services/token-storage.service';
import { TableListService } from './table-list.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  public data: any;

  constructor(public tablelistservice: TableListService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigateByUrl("/login");
    }
    this.getData()
  }
  deleteRow(id: any) {
    this.tablelistservice.deleteData(id).subscribe(
      res => { this.getData() },
      (err: any) => console.log(err)
    );
  }
  getData() {
    this.tablelistservice.getData().subscribe(
      res => this.handleResponse(res),
      (err: any) => console.log(err),
    )
  }
  handleResponse(res: any) {
    this.data = res;
    console.log(this.data);
  }

  addRow() { }
  editRow(id: string) { }



  handleError(err: any) {
    console.log({ err });
  }

}
