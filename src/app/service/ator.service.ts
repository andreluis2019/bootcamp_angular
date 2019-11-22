import { Injectable } from '@angular/core';
import {Ator} from '../model/Ator';
import {Observable, of, of as observableOf} from 'rxjs';
import {Filme} from '../model/Filme';

@Injectable({
  providedIn: 'root'
})
export class AtorService {

  private atorList: Ator[];
  private KEY_ATORES = 'KEY_ATORES';

  constructor() {
    this.atorList = [];
  }

  findAll(): Observable<Ator[]> {
    return observableOf(JSON.parse(localStorage.getItem(this.KEY_ATORES)));
  }

  add(ator: Ator): void {
    this.atorList.push(ator);
    localStorage.setItem(this.KEY_ATORES, JSON.stringify(this.atorList));
  }

  editar(ator: Ator): void {
    const index = this.atorList.findIndex(item => item.id === ator.id);
    this.atorList[index] = ator;
    localStorage.setItem(this.KEY_ATORES, JSON.stringify(this.atorList));
  }

  remove(ator: Ator): void {
    const index = this.atorList.findIndex(item => item.id === ator.id);

    this.atorList.splice(index, 1);
    localStorage.setItem(this.KEY_ATORES, JSON.stringify(this.atorList));
  }

  size(): Observable<number> {
    return of(this.atorList.length);
  }

  clear(): void {
    this.atorList = [];
    localStorage.removeItem(this.KEY_ATORES);
  }

  get(id: number): Observable<Ator> {
    return new Observable((observer) => {
      this.findAll().subscribe(res => {
        const ator = res.find(a => a.id == id);
        observer.next(ator);
        observer.complete();
      });
    });
  }
}
