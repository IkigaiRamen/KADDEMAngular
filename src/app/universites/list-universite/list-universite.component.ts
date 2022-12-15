import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/core/Model/Universite';
import { UniversiteService } from 'src/app/core/services/universite.service';


@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {
  Universites: Universite[];
  listUniversite: Universite[];
  shouldOpen!:boolean;
action:String;
universite: Universite;
un:Universite;
 
  constructor(private universiteservice:UniversiteService,
    private router: Router,private uss: ActivatedRoute) { }

 
    ngOnInit(): void {


      this.allUni();
     }



      //add|update

      add2(universite:Universite){
      //  let id = this.uss.snapshot.params['id'];
// console.log(id);
console.log(universite);
if(universite.id!=null){
  console.log(universite);
this.action="update";
}
else{
        console.log(universite);
        console.log("last");
        this.universiteservice.addUniv(universite).subscribe();
       location.reload();
}
      }
      sendTofils(u:Universite){
        console.log("2")
       window.scroll(0,0);
        this.un={...u};
        console.log(this.universite);
        this.shouldOpen=true;
      }
  add(universite:Universite) {
    console.log("aywah");
    console.log(universite);

    if (this.action == 'update') {
      this.universiteservice
        .updateUni(this.universite)
        .subscribe(() => console.log('complete'));
    } else {
    
      console.log('this.universite:', this.universite);
      this.universiteservice.addUniv(this.universite).subscribe((result) => {
        if (result) {
          this.Universites = [this.universite, ...this.listUniversite];
          location.reload();
        }
      });
    }
    
  }
     openAddForm(){
      this.shouldOpen = true;
    }
     allUni() {
      this.universiteservice.allUni().subscribe((res) => {
        this.listUniversite = res;
        
      });
    }
    updateUniversite(idUni: number) {
      this.router.navigate(['/universites/universite/putUni', idUni]);
    }
  
    
    deleteUniv(idUni: number) {
      this.universiteservice.deleteUni(idUni).subscribe(() => {this.allUni()});

    }
    
    toadd(){
      this.router.navigate(['/universites/universite/add'])
    } 
    
  }
 
  


