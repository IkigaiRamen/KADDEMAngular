import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ContractListComponent } from './contract-list/contract-list.component';

const routes: Routes = [{ path: '', component: ContractListComponent },
{ path: 'addContract', component: ContractFormComponent },
{ path: 'updateContract/:id', component: ContractFormComponent },
{ path: ':id', component: ContractDetailComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
