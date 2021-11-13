import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';
import { HttpClientModule } from '@angular/common/http'
import { CourseService } from './course.service';



@NgModule({
  declarations: [ CourseComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    RouterModule.forChild([
      {path: '', component: CourseComponent}
    ])
  ],
  
  providers: [CourseService],
  bootstrap: [CourseComponent]
})
export class CourseModule { }
