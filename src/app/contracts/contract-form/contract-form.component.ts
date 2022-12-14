import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from '../../core/Model/Contrat';
import { ContratService } from '../../core/services/contrat.service';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css'],
  providers: [DatePipe],
})
export class ContractFormComponent implements OnInit {

  constructor(
    private datePipe: DatePipe,
    private contratService: ContratService,
    public route: Router,
    private currentRoute: ActivatedRoute
  ) {}
  contrat: Contrat;
  action: string;
  contratList: Contrat[];
  currentDate = new Date();
  mindate: any;
  ngOnInit(): void {
    this.mindate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    this.contrat = new Contrat();
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      //update
      this.action = 'update';
      this.contratService.getContratById(id).subscribe((data: Contrat) => {
        this.contrat = data;
        console.log(data)

      });
      console.log('update funtion' + this.contrat);
    } else {
      //add
      this.action = 'add new';
      this.contrat = new Contrat();
      console.log('add functions>' + this.contrat);


      this.contrat.archive=true;
    }

    //get
    this.contratService.getAllContrat().subscribe((data: Contrat[]) => {
      this.contratList = data;
    });
  }

  //add|update
  add() {
    if (this.action == 'update') {
      console.log('test'+this.contrat);
      console.log('this is the date'+this.contrat.dateDebutContrat);

      this.contratService
        .updateContrat(this.contrat)
        .subscribe(() => console.log('complete'));
        location.reload();
    } else {
      console.log('this is the add fucntion:', this.contrat);
      this.contratService.addContrat(this.contrat).subscribe((result) => {
        if (result) {
          this.contratList = [this.contrat, ...this.contratList];
          location.reload();
        }
      });
    }
  }

  //delete
  delete() {
    this.contratService.deleteContrat(this.contrat.idContart);
  }
  //navigate
  goToContractList() {
    this.route.navigate(['/contracts/ContractsList']);
  }

}
