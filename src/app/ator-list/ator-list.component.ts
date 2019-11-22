import {Component, OnDestroy, OnInit} from '@angular/core';
import {AtorService} from '../service/ator.service';
import {Ator} from '../model/Ator';
import {Title} from '@angular/platform-browser';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ator-list',
  templateUrl: './ator-list.component.html',
  styleUrls: ['./ator-list.component.scss']
})
export class AtorListComponent implements OnInit {
  atorParaEditar: Ator;
  boolean: boolean;
  atorList: Ator[];

  constructor(private atorService: AtorService,
              private titleService: Title) {
    atorService.findAll().subscribe(ator => {
      this.atorList = ator;
    })
  }

  editar(ator: Ator): void {
    this.boolean = true;
    this.atorParaEditar = JSON.parse(JSON.stringify(ator));
  }

  size(): Observable<number> {
    return this.atorService.size();
  }

  atualizarRegistros(): void {
    this.atorService.findAll().subscribe( res => {
      this.atorList = res;
    })
    this.atorParaEditar = null;
  }

  ngOnInit() {
    this.titleService.setTitle('Cine BootCamp - Atores');
    this.gerarAtors();
    this.atorService.findAll().subscribe( res => {
      this.atorList = res;
    })
  }

  private gerarAtors(): void {
    this.atorService.size().subscribe(size => {
      if (size === 0) {
        const ator = new Ator();
        ator.id = 1;
        ator.nome = 'Robert Downey Jr.';
        ator.idade = 56;
        this.atorService.add(ator);

        const ator2 = new Ator();
        ator2.id = 2;
        ator2.nome = 'Chris Evans';
        ator2.idade = 48;
        this.atorService.add(ator2);

        const ator3 = new Ator();
        ator3.id = 3;
        ator3.nome = 'Mark Ruffalo';
        this.atorService.add(ator3);

        const ator4 = new Ator();
        ator4.id = 4;
        ator4.nome = 'Chris Hemsworth';
        ator4.idade = 43;
        this.atorService.add(ator4);

        const ator5 = new Ator();
        ator5.id = 5;
        ator5.nome = 'Scarlett Johansson';
        this.atorService.add(ator5);

        const ator6 = new Ator();
        ator6.id = 6;
        ator6.nome = 'Jeremy Renner';
        ator6.idade = 50;
        this.atorService.add(ator6);

        const ator7 = new Ator();
        ator7.id = 7;
        ator7.nome = 'Don Cheadle';
        this.atorService.add(ator7);

        // this.atorService.remove(ator3);
      }
    }
    )
  }

  excluir(ator: Ator): void {
    this.atorService.remove(ator);
    this.atorService.findAll().subscribe( res => {
      this.atorList = res;
    })
  }
}
