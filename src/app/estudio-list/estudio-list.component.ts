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
  estudioParaEditar: Estudio;
  boolean: boolean;
  estudioList: Estudio[];

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
    this.estudioService.findAll().subscribe( res => {
      this.estudioList = res;
    })
    this.estudioParaEditar = null;
  }

  excluir(estudio: Estudio): void {
    this.estudioService.remove(estudio);
    this.estudioService.findAll().subscribe( res => {
      this.estudioList = res;
    })
  }

  ngOnInit() {
    this.titleService.setTitle('Cine BootCamp - Estúdios');
    this.gerarStudios();
    this.estudioService.findAll().subscribe( res => {
      this.estudioList = res;
    })
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
