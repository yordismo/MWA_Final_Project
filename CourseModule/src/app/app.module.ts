import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "course", loadChildren: () => import('./course/course.module').then(m => m.CourseModule)},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



  

