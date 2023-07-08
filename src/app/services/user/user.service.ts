import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user.module';


const baseUrl = 'http://localhost:8080/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getByEmail(email: string) : Observable<User>{
    return this.http.get<User>(baseUrl+"/find/"+email);
  }

  create(user:any, isOwner: boolean): Observable<any>{
    let url = isOwner? "/add-owner": "/add-client";
    return this.http.post(baseUrl+url, user);
  }

  /*
  create(user: any, isOwner: boolean): Observable<any> {
    return this.http.post(baseUrl+"/add", 
    {
      user: user,
      isOwner:isOwner
    });
  }*/
}
