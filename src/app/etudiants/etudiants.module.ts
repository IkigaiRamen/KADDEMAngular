import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';


@NgModule({
  declarations: [
    ListEtudiantComponent,
    FormEtudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    FormsModule
  ]
})
export class EtudiantsModule { }
