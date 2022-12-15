import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/core/Model/Department';
import { Universite } from 'src/app/core/Model/Universite';
import { DepartmentService } from 'src/app/core/services/department.service';
import { UniversiteService } from 'src/app/core/services/universite.service';


@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  listdepartments: Department[];
action:String;
nomUni:any;
listeUni:Universite[];
department: Department=new Department();

  constructor(private departmentserivce: DepartmentService,
     private router: Router,  private currentRoute: ActivatedRoute,
     private universiteSer:UniversiteService) { }

  ngOnInit(): void {

    

    this.universiteSer.allUni().subscribe((dat: Universite[]) => {
      this.listeUni = dat;
      console.log(dat);
    })
    
    this.department.universites = {nomUni:null};
    
    this.department = new Department();
    let id = this.currentRoute.snapshot.params['id'];
          //update

    if (id != null) {
      console.log(id);
      this.departmentserivce.getDepartmentById(id).subscribe((data:Department)=>{
        this.department=data
      })
      console.log(this.department);
      this.action = 'update';
      this.goToDepartmentList
    } else {
      //add
      this.action = 'add new';
      this.department = new Department();
      this.goToDepartmentList
    }

  }

  //add|update
  add() {
    if (this.action == 'update') {
      this.departmentserivce
        .updateDepartment(this.department)
        .subscribe(() => console.log('complete'));
          this.router.navigate(['/departments/Department/list'])

    } else {
    
      console.log('this.department:', this.department);
      this.departmentserivce.addDepartment(this.department).subscribe((result) => {
        if (result) {
          this.router.navigate(['/departments/Department/list'])
          this.listdepartments = [this.department, ...this.listdepartments];
          location.reload();
        }
      });
    }
    
  }

  //delete
  delete() {
    this.departmentserivce.deleteDepartment(this.department.id);
  }
  //navigate
  goToDepartmentList() {
    this.router.navigate(['/DepartmentDepartment/list']);
  }
}


