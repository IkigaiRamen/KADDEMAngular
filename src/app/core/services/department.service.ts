import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from '../Model/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }
  url: string = 'http://localhost:3000/departement';


  getAlldep() {
    return this.http.get<Department[]>(this.url);
  }
  addDepartment(department: Department): Observable<Object> {
    return this.http.post(this.url, department);
  }
  //updateDepartment(idDepart: number,department: department): Observable<Object> {
    //return this.http.put(this.url + `/putDep/${idDepart}`, department);
 // }
 
  deleteDepartment(id: number): Observable<Object> {
    return this.http.delete(this.url+'/'+id);
  }
  getDepartmentById(id: number) {
    return this.http.get<Department>(this.url+'/'+id);
  } 
 
  updateDepartment(department: Department): Observable<any> {
    return this.http.put<Department>(this.url+'/'+department.id,department);}
    
  exportPDF(): Observable<any> {
    return this.http.get<Department>(this.url + `/pdfDownload`, {
      responseType: 'blob' as 'json'});
  }
  Getdepart (nomUni:String){
    return this.http.get<Department>(this.url + `/getdepartbyUniv/${nomUni}`);}


    getDepartmentByIdList(idDepart: number): Observable<any[]> {
      return this.http.get<any[]>(this.url + `/department/${idDepart}`);
    } 
   
    getDepartmentByIdUniv(nomUni: String): Observable<any[]> {
      return this.http.get<any[]>(this.url + `/getIDU/${nomUni}`);
    } 
    getUniversite(idUni: any): Observable<any> {
      return of({
        idUni: 1,
      });
    }
    updateDepart(idDepart: number,department: Department): Observable<any> {
      return this.http.put(this.url + `/putDep/${idDepart}`,department
      );
    }
   
}