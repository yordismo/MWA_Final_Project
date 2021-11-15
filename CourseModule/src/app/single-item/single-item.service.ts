import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SingleItemService {

  url: string = "http://localhost:4000/course/";

  constructor(private http: HttpClient) { }


  getData(id: any) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return this.http.get(this.url + id)
      .pipe(map((res: any) => res))
  }


  patchData(id: string, data: any) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return this.http.patch(this.url + id, data)
      .pipe(map((res: any) => res));
  }
}
