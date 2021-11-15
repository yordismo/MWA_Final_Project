import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableListService {
  url: string ="http://localhost:4000/course/"

  constructor(private http:HttpClient) {

   }

   getData(){
     let header=new Headers();
     header.append('Content-Type','application/json');
     return this.http.get(this.url).pipe(map((res:any)=>res));
   }

   deleteData(id:any){
     let header=new Headers();
     header.append('Content-Type','application/json');
     return this.http.delete(this.url+id).pipe(map((res:any)=>res));
   }
}
