import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Estudio} from '../model/Estudio';
import {EstudioService} from '../service/estudio.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-estudio-form',
  templateUrl: './estudio-form.component.html',
  styleUrls: ['./estudio-form.component.scss']
})
export class EstudioFormComponent {

  @Input() estudio = new Estudio();

  @Input() editar = false;

  @Output() onPersist = new EventEmitter<void>();

  constructor(private estudioService: EstudioService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(p => {
    const id = p['id'];
    if (id) {
      this.estudioService.get(id).subscribe(res => {
      this.estudio = res;
      this.editar = true;
    });
  }
}
)
}

  adicionar(): void {
    if (this.editar) {
      this.estudioService.editar(this.estudio);
    } else {
      this.estudioService.add(this.estudio);
    }
    this.onPersist.emit();
    this.router.navigate(['/estudio-list']);
  }

}
