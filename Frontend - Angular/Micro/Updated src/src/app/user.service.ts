import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usermodel } from './model/usermodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string="http://localhost:1234";
  
  
constructor(private http:HttpClient) { }
  
loginUser(usermodel:any) {
    return this.http.post(this.url+"/login",usermodel);
  }    
  
insert(movi : usermodel)
{
    this.http.post(this.url+"/registerInsert",movi).subscribe();
    return "Registered Successfully";

}

update(movi:usermodel)
{
  this.http.put(this.url+"/userUpdate",movi).subscribe();
  return "Record updated";
}


delete(movi:usermodel)
{
  this.http.delete(this.url+"/userDelete/"+movi).subscribe();
  return "Record Deleted";
}
getAlldetails()
{
  return this.http.get<usermodel[]>(this.url+"/userViewAll");
}
}
