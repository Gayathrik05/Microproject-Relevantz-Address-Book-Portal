import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgservService {
  constructor(private _http : HttpClient) { }

  private url: string = 'http://localhost:1234';

  insertEmployee(data : any):Observable<any>{
      return this._http.post<any>(this.url+"/empMessageInsert",data);
      
  }
  viewEmployee(){
    return this._http.get<any[]>(this.url+"/empMessageViewAll");  
    
  }
  updateEmployee(data : any){
    return this._http.put<any>(this.url+"/empMessageUpdate/",data);
    
  }
  deleteEmployee(empId:number){
    return this._http.delete<any>(this.url+"/empMessageDelete/"+empId);
    
    
  }
}