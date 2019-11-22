import { Injectable } from '@angular/core';
import {Filme} from '../model/Filme';
import {Observable, of, of as observableOf, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private filmeList: Filme[];
  private KEY_FILMES = 'KEY_FILMES';

  constructor() {
    this.filmeList = [];
  }

  findAll(): Observable<Filme[]> {
    return observableOf(JSON.parse(localStorage.getItem(this.KEY_FILMES)));
  }

  add(filme: Filme): void {
    this.filmeList.push(filme);
    localStorage.setItem(this.KEY_FILMES, JSON.stringify(this.filmeList));
  }

  editar(filme: Filme): void {
    const index = this.filmeList.findIndex(item => item.id === filme.id);
    this.filmeList[index] = filme;
    localStorage.setItem(this.KEY_FILMES, JSON.stringify(this.filmeList));
  }

  remove(filme: Filme): void {
    const index = this.filmeList.findIndex(item => item.id === filme.id);

    this.filmeList.splice(index, 1);
    localStorage.setItem(this.KEY_FILMES, JSON.stringify(this.filmeList));
  }

  getTotal(): Observable<number> {
    // let total: number;
    // total = 0;
    // for (const filmeListElement of this.filmeList) {
    //   total = total + filmeListElement.precoBilhete;
    // }
    // return total;
    return of(this.filmeList.reduce((soma, filme) => soma + filme.precoBilhete, 0));
  }

  size(): Observable<number> {
    return of(this.filmeList.length);
  }

  clear(): void {
    this.filmeList = [];
    localStorage.removeItem(this.KEY_FILMES);
  }

  get(id: number): Observable<Filme> {
    return new Observable((observer) => {
      this.findAll().subscribe(res => {
        const filme = res.find(a => a.id == id);
        observer.next(filme);
        observer.complete();
      });
    });
  }
}
