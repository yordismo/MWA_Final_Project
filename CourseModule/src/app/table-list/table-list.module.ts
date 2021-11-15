import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { TableListService } from './table-list.service';
import { TableListComponent } from './table-list.component';


@NgModule({
  declarations: [TableListComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    RouterModule.forChild([
      { path: '', component: TableListComponent }
    ])
  ],
  providers: [TableListService]
})
export class TableListModule { }