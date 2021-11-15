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

  ngOnInit() {
  }

}
