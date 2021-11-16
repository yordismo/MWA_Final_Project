import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewItemService {

  url: string = "http://localhost:4000/course/";

  constructor(private http: HttpClient) { }


  saveData(data: any) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return this.http.post(this.url, data)
      .pipe(map((res: any) => res))
  }
}
