import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Universite } from '../Model/Universite';
@Injectable({
  providedIn: 'root',
})
export class UniversiteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }
  public url = 'http://localhost:3000/universite';

  allUni(){
    return this.http.get<Universite[]>(this.url);

  }
  addUniv(universite: Universite){
    return this.http.post(this.url, universite);

  }
 
 deleteUni(idUni: number): Observable<Object> {
    return this.http.delete(this.url + `/deleteUniversite/${idUni}`);
  }
  getUniversiteById(idUni: number): Observable<Universite> {
    return this.http.get<Universite>(this.url + `/getbyid/${idUni}`);
  } 
  updateUni(universite: Universite ): Observable<Universite> {
    return this.http.put<Universite>(this.url + `/updateUniversite/`,universite );
  }
  
  
}
