import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { FormsModule } from '@angular/forms';
import { EquipeService } from '../core/services/equipe.service';


@NgModule({
  declarations: [
    ListEquipeComponent,
    FormEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    FormsModule
  ],
  providers:[EquipeService]
})
export class EquipeModule { }
