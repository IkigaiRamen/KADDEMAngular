import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { detailEquipe } from 'src/app/core/Model/detailEquipe';
import { Equipe } from 'src/app/core/Model/Equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.css']
})
export class FormEquipeComponent implements OnInit {
  listEquipe: Equipe[];
  action:String;
  Equipe: Equipe;
  DetailEquipe:detailEquipe;
    
    constructor(
      private Equipeservice: EquipeService,
      private currentRoute: ActivatedRoute,
      private router: Router,
     
    ) {}
  
    ngOnInit(): void {
      this.Equipe = new Equipe();
      this.DetailEquipe=new detailEquipe();

      let id = this.currentRoute.snapshot.params['id'];
      if (id != null) {
        //update
        this.action = 'Update';
        this.Equipeservice.getEquipeById(id).subscribe((data: Equipe) => {
          
          this.Equipe = data;
        });
        console.log('=================>' + this.Equipe);
      } else {
        //add
        this.action = 'Add';
        this.Equipe = new Equipe();
      }
  
      //get
      this.Equipeservice.allEquipe().subscribe((data: Equipe[]) => {
        this.listEquipe = data;
      });
    }
  
    //add|update
    add() {
      if (this.action == 'update') {
        this.Equipe.detailEquipe=this.DetailEquipe;
        this.Equipeservice
          .updateEquipe(this.Equipe)
          .subscribe(() => console.log('complete'));
      } else {
      
        console.log('this.Equipe:', this.Equipe);
        this.Equipe.detailEquipe=this.DetailEquipe;
        this.Equipeservice.addEquipe(this.Equipe).subscribe((result) => {
          if (result) {
            this.listEquipe = [this.Equipe, ...this.listEquipe];
            location.reload();
          }
        });
      }
      
    }
}