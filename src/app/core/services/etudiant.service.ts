import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../Model/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  public uri = 'http://localhost:9090/kaddem/Etudiant';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getAllEtudiant() {
    return this.http.get<Etudiant[]>(this.uri + '/getalletudiant');
  }
  addEtudiant(e: Etudiant) {
    //console.log('c:==================> ', c);
    return this.http.post(this.uri + '/addetudiant', e);
  }

  updateEtudiant(e: Etudiant): Observable<Object> {
    return this.http.put<Etudiant>(this.uri + '/updateEtutiant', e);
  }

  getEtudiantById(id: number) {
    return this.http.get<Etudiant>(this.uri + `/getbyid/${id}`);
  }

  deleteEtudiant(id: number): Observable<Object> {
    return this.http.delete(this.uri + `/delete/${id}`);
  }
}
