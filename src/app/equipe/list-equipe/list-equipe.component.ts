import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/core/Model/Equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';
@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
  equipes: Equipe[];
  listeEquipe :any ;
  constructor(private router:Router, private Equipeser:EquipeService, private uss:ActivatedRoute) { }

  ngOnInit(): void {
    this.allEquipe();
  }
 
  allEquipe() {
   this.Equipeser.allEquipe().subscribe((res) => {
     this.listeEquipe = res;
   });
 }
 updateEquipe(idEquipe: number) {
   this.router.navigate(['/universites/universite/putUni', idEquipe]);
 }

 
 deleteEquipe(idEquipe: number) {
   this.Equipeser.deleteEquipe(idEquipe).subscribe((data) => {
     console.log(data);
     this.allEquipe();
   });
 }
 
 toadd(){
   this.router.navigate(['/equipes/equipe/add'])
 } 
 
}




