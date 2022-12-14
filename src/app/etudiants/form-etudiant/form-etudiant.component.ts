import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/core/Model/Contrat';
import { Department } from 'src/app/core/Model/Department';
import { Etudiant } from 'src/app/core/Model/Etudiant';
import { ContratService } from 'src/app/core/services/contrat.service';
import { DepartmentService } from 'src/app/core/services/department.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {
  etudiant: Etudiant;
  action: string;
  etudiantList: Etudiant[];
  listeDept:Department[];
  listeContrats:Contrat[];

  constructor(private etudiantService: EtudiantService, 
    private route: Router,
    private currentRoute: ActivatedRoute,
    private DepartementService:DepartmentService,
    private contratService:ContratService) { }

  ngOnInit(): void {
    this.etudiant = new Etudiant();
    this.contratService.getAllContrat().subscribe((data: Contrat[])=> {
      this.listeContrats=data;
      console.log(data);
    })
    this.DepartementService.getAlldep().subscribe((data: Department[]) => {
    this.listeDept = data;
    console.log(data);
  }
    )
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      //update
      this.action = 'Update';
      this.etudiantService.getEtudiantById(id).subscribe((data: Etudiant) => {
        this.etudiant = data;
      });
      console.log('=================>' + this.etudiant);
    } else {
      //add
      this.action = 'Add new';
      this.etudiant = new Etudiant();
    }

    //get
    this.etudiantService.getAllEtudiant().subscribe((data: Etudiant[]) => {
      this.etudiantList = data;
    });
  }

  //add|update
  add() {
    if (this.action == 'update') {
      this.etudiantService
        .updateEtudiant(this.etudiant)
        .subscribe(() => console.log('complete'));
        location.reload();
    } else {
      console.log('this is the student:', this.etudiant);
      this.etudiantService.addEtudiant(this.etudiant).subscribe((result) => {
        if (result) {
          this.route.navigate(['/etudiants/'])
          this.etudiantList = [this.etudiant, ...this.etudiantList];
          //location.reload();
        }
      });
    }
  }

  //delete
  delete() {
    this.etudiantService.deleteEtudiant(this.etudiant.id);
  }
  //navigate
  goToEtudiantList() {
    this.route.navigate(['/etudiants/']);
  }

  }


