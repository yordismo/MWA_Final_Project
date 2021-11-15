import { Component, Input, OnInit } from '@angular/core';
import { SingleItemService } from './single-item.service';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {
  @Input itemId: string;
  constructor(private singleItemService: SingleItemService) { }

  getData() {
    this.singleItemService.getData(this.itemId).subscribe(
      res => this.handleResponse(res),
      err => this.handleError(err),
    );
  }

  ngOnInit(): void {
  }

}
