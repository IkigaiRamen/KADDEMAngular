import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contrat } from '../Model/Contrat';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContratService {
  public url = 'http://localhost:3000/contrat';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getAllContrat() {
    return this.http.get<Contrat[]>(this.url);
  } 
  getContratById(id: number) {
    return this.http.get<Contrat>(this.url+'/'+id);
  }
  addContrat(c: Contrat) {
        return this.http.post(this.url, Contrat)
  }

  updateContrat(Contrat: Contrat): Observable<Object> {
    const ID = Contrat.id;

    return this.http.put<Contrat>(this.url+'/'+ID, Contrat);
  }


  deleteContrat(id: number): Observable<Object> {
    return this.http.delete(this.url+'/'+id);
  }
}
