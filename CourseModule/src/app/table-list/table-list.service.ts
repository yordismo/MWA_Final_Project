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
   addData(item:any){
    let header=new Headers();
    header.append('Content-Type','application/json');
    return this.http.post(this.url,JSON.stringify(item)).pipe(map((res:any)=>res))
  }


   deleteData(id:any){
     let header=new Headers();
     header.append('Content-Type','application/json');
     return this.http.delete(this.url+id)
     
     //return this.http.delete(this.url+id).pipe(map((res:any)=>res));
   }

   getCourseDictData(){
    let header=new Headers();
    header.append('Content-Type','application/json');
    return this.http.get(this.url+'aggregations').pipe(map((res:any)=>res));
  }
  getCourseDictDataById(id:any){
    let header=new Headers();
    header.append('Content-Type','application/json');
    return this.http.get(this.url+'course-dictionary-id/'+id).pipe(map((res:any)=>res));
  }

  getDataById(id:any){
    let header=new Headers();
    header.append('Content-Type','application/json');
    return this.http.get(this.url+id).pipe(map((res:any)=>res));
  }

  getDataCharts(){
    let header=new Headers();
    header.append('Content-Type','application/json');
    return this.http.get(this.url+'charts').pipe(map((res:any)=>res));
  }

}
