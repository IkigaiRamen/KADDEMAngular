import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contrat } from '../Model/Contrat';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContratService {
  public uri = 'http://localhost:9090/kaddem/Contrat';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getAllContrat() {
    return this.http.get<Contrat[]>(this.uri + '/getAllContrat');
  }
  addContrat(c: Contrat) {
    //console.log('c:==================> ', c);
    return this.http.post(this.uri + '/addContrat', c);
  }

  updateContrat(contrat: Contrat): Observable<Object> {
    return this.http.put<Contrat>(this.uri + '/updateContrat', contrat);
  }

  getContratById(id: number) {
    return this.http.get<Contrat>(this.uri + `/getbyidContrat/${id}`);
  }

  deleteContrat(id: number): Observable<Object> {
    return this.http.delete(this.uri + `/deleteContrat/${id}`);
  }
}
