import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilmeService} from '../service/filme.service';
import {Router} from '@angular/router';
import {Filme} from '../model/Filme';
import {Ator} from '../model/Ator';
import {EstudioService} from '../service/estudio.service';
import {Estudio} from '../model/Estudio';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.scss']
})
export class FilmeFormComponent {

  @Input() filme = new Filme();

  @Input() editar = false;

  @Output() onPersist = new EventEmitter<void>();

  constructor(private filmeService: FilmeService,
              private router: Router) { }

  adicionar(): void {
    if (this.editar) {
      this.filmeService.editar(this.filme);
    } else {
      this.filmeService.add(this.filme);
    }
    this.onPersist.emit();
    this.router.navigate(['/filme-list']);
  }

}
