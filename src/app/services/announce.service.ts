import { Injectable } from '@angular/core';
import { Announce } from '../models/announce.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/announce';


@Injectable({
  providedIn: 'root'
})

export class AnnounceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Announce[]> {
    return this.http.get<Announce[]>(baseUrl+"/findAll");
  }

}
