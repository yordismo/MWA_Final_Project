import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url: string = "http://localhost:4000/course/";

  constructor(private http: HttpClient) { }

  

  getData() {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return this.http.get(this.url)
      .pipe(map((res: any) => res));
  }


  deleteData(id: string) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return this.http.delete(this.url+id)
      .pipe(map((res: any) => res));
  }
}





