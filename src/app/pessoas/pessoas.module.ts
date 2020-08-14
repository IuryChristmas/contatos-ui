import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';
import {TooltipModule} from 'primeng/tooltip';

import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';


@NgModule({
  declarations: [
    PessoasListaComponent,
    PessoasCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    RouterModule,
    InputMaskModule,
    ToastModule,
    TooltipModule,
  ],
  exports: [
    PessoasListaComponent
  ]
})
export class PessoasModule { }
