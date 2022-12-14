import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

const routes: Routes = [{ path: '', component: ListEquipeComponent },
  {path:"equipe/add", component:FormEquipeComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
