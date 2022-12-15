import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/core/Model/Contrat';
import { Universite } from 'src/app/core/Model/Universite';
import {UniversiteService}from 'src/app/core/services/universite.service'


@Component({
  selector: 'app-create-universite',
  templateUrl: './create-universite.component.html',
  styleUrls: ['./create-universite.component.css']
})
export class CreateUniversiteComponent implements OnInit {
  @Output() notification = new EventEmitter<Universite>();
  @Input() universiteFromParent? :Universite;
  listUniversite: Universite[];
action:String;
universite: Universite;
  
  constructor(
    private universiteservice: UniversiteService,
    private currentRoute: ActivatedRoute,
    private router: Router,
   
  ) {}

  ngOnInit(): void {
    if(this.universiteFromParent!=null){
      this.action="update";
      this.universite=this.universiteFromParent;
    }else{
      this.action = 'Add';
      this.universite = new Universite();
    }
  }


  notifparent(universite:Universite){
    this.notification.emit(universite)
  }
  //delete
  delete() {
    this.universiteservice.deleteUni(this.universite.id);
  }
  //navigate
  goToDepartmentList() {
    this.router.navigate(['/universites/universite']);
  }
}


