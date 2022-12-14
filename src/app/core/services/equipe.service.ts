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
  url: string = 'http://localhost:9090/kaddem/Equipe';


  allEquipe(): Observable<any> {
    return this.http.get(this.url + `/getAllEquipe`);
  }
  addEquipe(Equipe: Equipe){
    return this.http.post(this.url+`/addEquipe`, Equipe);
  }
 
 deleteEquipe(idEquipe: number): Observable<Object> {
    return this.http.delete(this.url + `/deleteEquipe/${idEquipe}`);
  }
  getEquipeById(idEquipe: number): Observable<Equipe> {
    return this.http.get<Equipe>(this.url + `/getbyid/${idEquipe}`);
  } 
  updateEquipe(Equipe: Equipe ): Observable<Equipe> {
    return this.http.put<Equipe>(this.url + `/updateEquipe/`,Equipe );
  }
  
  
}
