import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Equipe } from '../Model/Equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }
  url: string = 'http://localhost:3000/equipe';


  allEquipe(): Observable<any> {
    return this.http.get<Equipe[]>(this.url);
  }
  getEquipeById(id: number): Observable<Equipe> {
    return this.http.get<Equipe>(this.url+'/'+id);
  } 
  addEquipe(Equipe: Equipe){
    return this.http.post(this.url, Equipe);
  }
 
 deleteEquipe(id: number): Observable<Object> {
    return this.http.delete(this.url +'/'+id);
  }

  updateEquipe(Equipe: Equipe ): Observable<Equipe> {
    const ID = Equipe.id;

    return this.http.put<Equipe>(this.url+'/'+ID, Equipe);
  }
  
  
}
