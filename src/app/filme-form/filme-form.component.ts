import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FilmeService} from '../service/filme.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Filme} from '../model/Filme';
import {EstudioService} from '../service/estudio.service';
import {Estudio} from '../model/Estudio';
import {ClassificacaoEnum} from '../enumerations/classificacao.enum';
import {Ator} from '../model/Ator';
import {AtorService} from '../service/ator.service';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.scss']
})
export class FilmeFormComponent {

  @Input() filme = new Filme();

  @Input() editar = false;

  @Output() onPersist = new EventEmitter<void>();

  estudioList: Estudio[];
  atorList: Ator[];

  constructor(private filmeService: FilmeService,
              private estudioService: EstudioService,
              private atorService: AtorService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(p => {
      const id = p['id'];
      if (id) {
        this.filmeService.get(id).subscribe(res => {
          this.filme = res;
          this.editar = true;
        });
      }
    })
    estudioService.findAll().subscribe(estudio => {
      this.estudioList = estudio;
    })
    atorService.findAll().subscribe(ator => {
      this.atorList = ator;
    })
  }

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
