import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Estudio} from '../model/Estudio';
import {EstudioService} from '../service/estudio.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-estudio-list',
  templateUrl: './estudio-list.component.html',
  styleUrls: ['./estudio-list.component.scss']
})
export class EstudioListComponent implements OnInit {
  estudioList$: Observable<Estudio[]>;
  estudioParaEditar: Estudio;
  boolean: boolean;

  constructor(private estudioService: EstudioService,
              private titleService: Title) {
  }

  editar(estudio: Estudio): void {
    this.boolean = true;
    this.estudioParaEditar = JSON.parse(JSON.stringify(estudio));
  }

  size(): Observable<number> {
    return this.estudioService.size();
  }

  atualizarRegistros(): void {
    this.estudioList$ = this.estudioService.findAll();
    this.estudioParaEditar = null;
  }

  excluir(estudio: Estudio): void {
    this.estudioService.remove(estudio);
    this.estudioList$ = this.estudioService.findAll();
  }

  ngOnInit() {
    this.titleService.setTitle('Cine BootCamp - Estúdios');
    this.gerarStudios();
    this.estudioList$ = this.estudioService.findAll();
  }

  private gerarStudios(): void {
    this.estudioService.size().subscribe(size => {
      if (size === 0) {
        const estudio = new Estudio();
        estudio.id = 1;
        estudio.nome = 'Marvel Studios';
        estudio.pais = 'EUA';
        this.estudioService.add(estudio);

        const estudio2 = new Estudio();
        estudio2.id = 2;
        estudio2.nome = 'Universal Pictures';
        estudio2.pais = 'EUA';
        this.estudioService.add(estudio2);
      }
      }
    )
  }

}
