import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
//insert
public doregistration(user: User) {
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.post("http://localhost:3000/users", user, { headers: headers, responseType: 'text' });
}

  public getusers(){
    return this.http.get("http://localhost:3000/users");
    }
 
    public deleteuser(id:any){
      return this.http.delete("http://localhost:8088/cancel/"+id);
      }
      //search by name
      public getuserbyname(first_name:any){
      return this.http.get("http://localhost:8088/first_name/"+first_name)
      }
  
}
