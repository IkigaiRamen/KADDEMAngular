import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { EtudiantService } from '../core/services/etudiant.service';
import { DepartmentService } from '../core/services/department.service';


@NgModule({
  declarations: [
    ListEtudiantComponent,
    FormEtudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    FormsModule
  ],
  providers:[
    EtudiantService,
    DepartmentService
  ]
})
export class EtudiantsModule { }
