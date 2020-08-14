import { PessoasCadastroComponent } from './pessoas/pessoas-cadastro/pessoas-cadastro.component';
import { PessoasListaComponent } from './pessoas/pessoas-lista/pessoas-lista.component';
import { Routes, RouterModule } from '@angular/router';
import { PessoasService } from './pessoas/pessoas.service';
import { PessoasModule } from './pessoas/pessoas.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



const routes: Routes = [
  { path: '', component: PessoasListaComponent},
  { path: 'pessoas', component: PessoasListaComponent },
  { path: 'pessoas/novo', component: PessoasCadastroComponent },
  { path: 'pessoas/:id', component: PessoasCadastroComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PessoasModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PessoasService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
