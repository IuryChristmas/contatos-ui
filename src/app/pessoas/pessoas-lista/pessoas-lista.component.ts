import { PessoaFilter } from './../../filter/pessoa-filter';
import { PessoasService } from './../pessoas.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-pessoas-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.css']
})
export class PessoasListaComponent implements OnInit {

  pessoas = [];
  nome: string;
  cpf: string;
  pageNumber = 0;
  pageSize = 10;
  totalElements = 0;

  constructor(private pessoasService: PessoasService) {}

  ngOnInit() {
  }

  pesquisar() {
    const pessoaFilter = new PessoaFilter();
    pessoaFilter.nome = this.nome;
    pessoaFilter.cpf = this.cpf;

    this.pessoasService.pesquisar(pessoaFilter, this.pageNumber, this.pageSize)
      .subscribe(res => {
        this.pessoas = res.content;
        this.totalElements = res.totalElements;
        this.pageNumber = res.number;
        this.pageSize = res.size;
      });
  }

  mudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pageNumber = pagina;
  }

  recuperarIdade(dataNascimento: Date) {
    dataNascimento = new Date(dataNascimento);
    const dataAtual = new Date();

    const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    return dataAtual.getMonth() >= dataNascimento.getMonth() ? idade : idade - 1;
  }

  quantidadeTelefones(telefones: object[]) {
    return telefones !== null ? telefones.length : 0;
  }

  excluir(id: number) {
    this.pessoasService.excluir(id)
      .subscribe(() => this.pesquisar());
  }
}
