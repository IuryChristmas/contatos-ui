import { PessoaFilter } from './../filter/pessoa-filter';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

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
}
