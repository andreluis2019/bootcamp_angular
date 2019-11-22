import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmeService} from '../service/filme.service';
import {Filme} from '../model/Filme';
import {ClassificacaoEnum} from '../enumerations/classificacao.enum';
import {Observable} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {Estudio} from '../model/Estudio';
import {EstudioService} from '../service/estudio.service';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.scss']
})
export class FilmeListComponent implements OnInit {
  filmeList$: Observable<Filme[]>;
  toolTip = '';
  filmeParaEditar: Filme;
  valorTotalBilhetes = 0;

  constructor(private filmeService: FilmeService,
              private titleService: Title) {
  }

  editar(filme: Filme): void {
    this.filmeParaEditar = JSON.parse(JSON.stringify(filme));
  }

  getTotal(): Observable<number> {
    return this.filmeService.getTotal();
  }

  size(): Observable<number> {
    return this.filmeService.size();
  }

  atualizarRegistro(): void {
    this.filmeList$ = this.filmeService.findAll();
    this.filmeParaEditar = null;
  }

  excluir(filme: Filme): void {
    this.filmeService.remove(filme);
    this.filmeList$ = this.filmeService.findAll();
  }

  ngOnInit(): void {
    this.titleService.setTitle('Cine BootCamp - Filmes');
    this.gerarFilmes();
    // this.filmeList = this.filmeService.findAll();
    // this.filmeService.findAll().subscribe(filmeList => this.filmeList = filmeList);
    this.filmeList$ = this.filmeService.findAll();
    // this.valorTotalBilhetes = this.filmeService.somaValorBilhetes(this.filmeList$);
  }

  setTitle(filme: Filme): void {
    // console.log('passou');

    if (filme.inativo) {
      this.toolTip = 'Inativo';
      return;
    }

    if (filme.precoBilhete <= 10) {
      this.toolTip = 'Custo baixo';
    }

    if (filme.precoBilhete > 10 && filme.precoBilhete < 20) {
      this.toolTip = 'Custo regular';
    }

    if (filme.precoBilhete >= 20 && filme.precoBilhete < 40) {
      this.toolTip = 'Custo médio';
    }

    if (filme.precoBilhete >= 40) {
      this.toolTip = 'Custo alto';
    }
  }

  private gerarFilmes() {
    const filme = new Filme();
    filme.id = 1;
    filme.titulo = 'Star Wars';
    filme.dataLancamento = new Date(1988, 3, 15);
    filme.precoBilhete = 20.1;
    filme.genero = 'Ficção';
    filme.classificacao = ClassificacaoEnum.ADULTO;
    filme.inativo = false;
    filme.dublado = true;
    this.filmeService.add(filme);


    const filme2 = new Filme();
    filme2.id = 2;
    filme2.titulo = 'Avengers Endgame';
    filme2.dataLancamento = new Date(2019, 3, 25);
    filme2.precoBilhete = 40.5;
    filme2.genero = 'Aventura';
    filme2.classificacao = ClassificacaoEnum.ADULTO;
    filme2.inativo = true;
    filme2.dublado = false;
    this.filmeService.add(filme2);

    // const filme3 = new Filme();
    // filme3.id = 3;
    // filme3.titulo = 'Homem de Ferro';
    // filme3.dataLancamento = new Date(2019, 3, 25);
    // filme3.precoBilhete = 10;
    // filme3.genero = 'Comédia';
    // filme3.classificacao = ClassificacaoEnum.ADOLESCENTE;
    // filme3.inativo = false;
    // filme3.dublado = true;
    // this.filmeService.add(filme3);
    //
    // const filme4 = new Filme();
    // filme4.id = 4;
    // filme4.titulo = 'Capitão América';
    // filme4.dataLancamento = new Date(2019, 3, 25);
    // filme4.precoBilhete = 20;
    // filme4.genero = 'Ação';
    // filme4.classificacao = ClassificacaoEnum.ADOLESCENTE;
    // filme4.inativo = false;
    // filme4.dublado = false;
    // this.filmeService.add(filme4);
    //
    // const filme5 = new Filme();
    // filme5.id = 5;
    // filme5.titulo = 'Liga da Justiça';
    // filme5.dataLancamento = new Date(2019, 3, 25);
    // filme5.precoBilhete = 15;
    // filme5.genero = 'Ação';
    // filme5.classificacao = ClassificacaoEnum.ADOLESCENTE;
    // filme5.inativo = false;
    // filme5.dublado = false;
    // this.filmeService.add(filme5);
    //
    // const filme6 = new Filme();
    // filme6.id = 6;
    // filme6.titulo = 'Mulher Maravilha';
    // filme6.dataLancamento = new Date(2019, 3, 25);
    // filme6.precoBilhete = 30;
    // filme6.genero = 'Aventura';
    // filme6.classificacao = ClassificacaoEnum.INFANTIL;
    // filme6.inativo = false;
    // filme6.dublado = false;
    // this.filmeService.add(filme6);
    //
    // const filme7 = new Filme();
    // filme7.id = 7;
    // filme7.titulo = 'Joker';
    // filme7.dataLancamento = new Date(2019, 3, 25);
    // filme7.precoBilhete = 45;
    // filme7.genero = 'Aventura';
    // filme7.classificacao = ClassificacaoEnum.ADULTO;
    // filme7.inativo = false;
    // filme7.dublado = false;
    // this.filmeService.add(filme7);
    //
    // const filme8 = new Filme();
    // filme8.id = 8;
    // filme8.titulo = 'Homem Aranha';
    // filme8.dataLancamento = new Date(2019, 3, 25);
    // filme8.precoBilhete = 25.4;
    // filme8.genero = 'Comédia';
    // filme8.classificacao = ClassificacaoEnum.INFANTIL;
    // filme8.inativo = false;
    // filme8.dublado = false;
    // this.filmeService.add(filme8);
    //
    // const filme9 = new Filme();
    // filme9.id = 9;
    // filme9.titulo = 'Thor';
    // filme9.dataLancamento = new Date(2019, 3, 25);
    // filme9.precoBilhete = 18;
    // filme9.genero = 'Aventura';
    // filme9.classificacao = ClassificacaoEnum.ADOLESCENTE;
    // filme9.inativo = false;
    // filme9.dublado = false;
    // this.filmeService.add(filme9);
    //
    // const filme10 = new Filme();
    // filme10.id = 10;
    // filme10.titulo = 'Quarteto Fantástico';
    // filme10.dataLancamento = new Date(2019, 3, 25);
    // filme10.precoBilhete = 9.5;
    // filme10.genero = 'Científico';
    // filme10.classificacao = ClassificacaoEnum.INFANTIL;
    // filme10.inativo = false;
    // filme10.dublado = false;
    // this.filmeService.add(filme10);

    // this.filmeService.remove(filme);
    // this.filmeService.remove(filme2);
  }
}
