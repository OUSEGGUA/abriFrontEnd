import { Injectable } from '@angular/core';
import { Announce } from '../../models/announce/announce.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/announce';


@Injectable({
  providedIn: 'root'
})

export class AnnounceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Announce[]> {
    return this.http.get<Announce[]>(baseUrl + "/findAll");
  }

  create(announce: any): Observable<any> {
    return this.http.post(baseUrl + "/add", announce);
  }


  getById(id: any): Observable<Announce> {
    console.log(id);
    return this.http.get<Announce>(baseUrl +"/findById/"+id);
  }

}
