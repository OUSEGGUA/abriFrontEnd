import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PropertyModel } from 'src/app/models/property/property.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/property';

@Injectable({
  providedIn: 'root'
})

export class PropertyServiceService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<PropertyModel[]> {
    return this.http.get<PropertyModel[]>(baseUrl+"/findAll");
  }

create(property: any): Observable<any> {
  return this.http.post(baseUrl+"/add", property); 
 }
 getById(id: any): Observable<PropertyModel> {
  console.log(id);
  return this.http.get<PropertyModel>(baseUrl +"/findById/"+id);
}
}
