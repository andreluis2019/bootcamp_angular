import { Injectable } from '@angular/core';
import {Estudio} from '../model/Estudio';
import {Observable, of, of as observableOf} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  private estudioList: Estudio[];
  private KEY_ESTUDIOS = 'KEY_ESTUDIOS';

  constructor() {
    this.estudioList = [];
  }

  findAll(): Observable<Estudio[]> {
    return observableOf(JSON.parse(localStorage.getItem(this.KEY_ESTUDIOS)));
  }

  add(estudio: Estudio): void {
    this.estudioList.push(estudio);
    localStorage.setItem(this.KEY_ESTUDIOS, JSON.stringify(this.estudioList));
  }

  editar(estudio: Estudio): void {
    const index = this.estudioList.findIndex(item => item.id === estudio.id);
    this.estudioList[index] = estudio;
    localStorage.setItem(this.KEY_ESTUDIOS, JSON.stringify(this.estudioList));
  }

  remove(estudio: Estudio): void {
    const index = this.estudioList.findIndex(item => item.id === estudio.id);

    this.estudioList.splice(index, 1);
    localStorage.setItem(this.KEY_ESTUDIOS, JSON.stringify(this.estudioList));
  }

  size(): Observable<number> {
    return of(this.estudioList.length);
  }

  clear(): void {
    this.estudioList = [];
    localStorage.removeItem(this.KEY_ESTUDIOS);
  }
}
