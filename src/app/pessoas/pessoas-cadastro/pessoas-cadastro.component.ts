import { Telefone } from './../../model/telefone';
import { PessoasService } from './../pessoas.service';
import { Pessoa } from './../../model/pessoa';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent implements OnInit {

  pessoa = new Pessoa();
  telefone = new Telefone();
  telefones: Telefone[] = [];
  parametroPessoaId = 'id';

  constructor(
    private pessoasService: PessoasService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params[this.parametroPessoaId] != null) {
      this._carregarPessoa(this.route.snapshot.params[this.parametroPessoaId]);
    }
  }

  salvar(form: FormGroup) {
    if (this.editando) {
      this._atualizarPessoa(form);
      return;
    }

    this._adicionarPessoa(form);
  }

  excluirTelefone(telefone: Telefone) {
    this.telefones = this.telefones
    .filter(telefoneFilter => telefoneFilter !== telefone);
  }

  adicionarTelefone() {
    this.telefones.push(this.telefone);
    this.telefone = new Telefone();
  }

  get editando() {
    return Boolean(this.pessoa.id);
  }

  private _carregarPessoa(id: number) {
    this.pessoasService.buscarPorId(id)
    .subscribe(pessoa => {
      this.pessoa = pessoa;
      this.pessoa.dataNascimento = new Date(pessoa.dataNascimento);
      this.telefones = pessoa.telefones;
    });
  }

  private _atualizarPessoa(form: FormGroup) {
    this.pessoa.telefones = this.telefones;
    this.pessoasService.atualizarPessoa(this.pessoa)
      .subscribe(pessoa => {
        this.pessoa = pessoa;
        this.pessoa.dataNascimento = new Date(pessoa.dataNascimento);
        this.telefones = pessoa.telefones;

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Atualizado com sucesso' });
      });
  }

  private _adicionarPessoa(form: FormGroup) {
    this.pessoa.telefones = this.telefones;
    this.pessoasService.salvar(this.pessoa)
      .subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Adicionado com sucesso' });
        form.reset();

        this.pessoa = new Pessoa();
        this.telefones = [];
      });
  }

}
