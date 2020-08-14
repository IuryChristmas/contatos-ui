import { PessoaFilter } from './../filter/pessoa-filter';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Pessoa } from '../model/pessoa';

@Injectable()
export class PessoasService {

  pessoasUrl = 'http://localhost:9000/pessoas';

  constructor(private http: HttpClient) { }

  pesquisar(pessoaFilter: PessoaFilter, page: number, size: number): Observable<any> {
    let params = new HttpParams();

    if (pessoaFilter.nome) {
      params = params.set('nome', pessoaFilter.nome);
    }

    if (pessoaFilter.cpf) {
      params = params.set('cpf', pessoaFilter.cpf);
    }

    params = params.set('page', page.toString());
    params = params.set('size', size.toString());

    return this.http.get(`${this.pessoasUrl}`, { params })
      .pipe(
        map((res: any) => res)
      );
  }

  excluir(id: number): Observable<void> {
    return this.http.delete(`${this.pessoasUrl}/` + id)
      .pipe(
        map((res: any) => res)
      );
  }

  salvar(pessoa: Pessoa): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post(this.pessoasUrl, pessoa, { headers })
      .pipe(
        map((res: any) => res)
      );
  }

  buscarPorId(id: number): Observable<Pessoa> {
    return this.http.get(`${this.pessoasUrl}/` + id)
      .pipe(
        map((res: any) => res)
      );
  }

  atualizarPessoa(pessoa: Pessoa): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.put(this.pessoasUrl, pessoa, { headers })
      .pipe(
        map((res: any) => res)
      );
  }

}
