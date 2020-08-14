import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
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
  ],
  exports: [
    PessoasListaComponent
  ]
})
export class PessoasModule { }
