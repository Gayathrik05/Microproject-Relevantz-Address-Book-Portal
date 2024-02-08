import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  constructor(private _http : HttpClient) { }

  private url: string = 'http://localhost:1234';

  insertEmployee(data : any):Observable<any>{
      return this._http.post<any>(this.url+"/empInsert",data);
      //return this.http.post<any>("http://localhost:1234/empInsert",data);
  }
  viewEmployee(){
    return this._http.get<any[]>(this.url+"/empViewAll");  
    //return  this.http.get<any[]>("http://localhost:1234/empViewAll");
  }
  updateEmployee(data : any){
    return this._http.put<any>(this.url+"/empUpdate/",data);
    //return this.http.post<any>("http://localhost:1234/empUpdate",data);
  }
  deleteEmployee(empId:number){
    return this._http.delete<any>(this.url+"/empDelete/"+empId);
    //return   this.http.delete<any>("http://localhost:1234/empDelete/"+empId );
    
  }
}