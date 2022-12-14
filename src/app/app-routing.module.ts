import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'contracts', loadChildren: () => import('./contracts/contracts.module').then(m => m.ContractsModule) },
  { path: 'etudiants', loadChildren: () => import('./etudiants/etudiants.module').then(m => m.EtudiantsModule) },
  { path: 'departments', loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule) },
  { path: 'universites', loadChildren: () => import('./universites/universites.module').then(m => m.UniversitesModule) },
  { path: 'equipes',loadChildren:() => import('./equipe/equipe.module').then(m=>m.EquipeModule)}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
