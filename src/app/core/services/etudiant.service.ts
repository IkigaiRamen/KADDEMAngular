import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../Model/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  url = "http://localhost:3000/etudiants";  

    constructor(private http:HttpClient) { }

  getAllEtudiant() {
    return this.http.get<Etudiant[]>(this.url);
  }
  getEtudiantById(id: number) {
    return this.http.get<Etudiant>(this.url+'/'+id);
  }
  addEtudiant(Etudiant: Etudiant){
    return this.http.post(this.url, Etudiant);
  }

  updateEtudiant(e: Etudiant):Observable<Etudiant> {
    const ID =e.id;
    console.log("this is the object in service",e , e.department)
    return this.http.put<Etudiant>(this.url+'/'+ID,e);}

  deleteEtudiant(id: number): Observable<Object> {
    return this.http.delete(this.url+'/'+id);
  }
  listeEquipes: Etudiant[]= [];


  //URL du Backend



}

