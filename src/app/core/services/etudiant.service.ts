import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../Model/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  url = "http://localhost:3000/etudiants";  

    constructor(private http:HttpClient) { }

  getAllEtudiant() {
    return this.http.get<Etudiant[]>(this.url);
  }
  getEtudiantById(id: number) {
    return this.http.get<Etudiant>(this.url+'/'+id);
  }
  addEtudiant(e: Etudiant): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(Etudiant);
    console.log(body)
    return this.http.post(this.url, body,{'headers':headers})
  }

  updateEtudiant(e: Etudiant): Observable<Object> {
    const ID = e.id;

    return this.http.put<Etudiant>(this.url+'/'+ID, Etudiant);
  }

  deleteEtudiant(id: number): Observable<Object> {
    return this.http.delete(this.url+'/'+id);
  }
  listeEquipes: Etudiant[]= [];


  //URL du Backend



}

