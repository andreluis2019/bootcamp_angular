import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ator} from '../model/Ator';
import {AtorService} from '../service/ator.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html',
  styleUrls: ['./ator-form.component.scss']
})
export class AtorFormComponent {

  @Input() ator: Ator = new Ator();

  @Input() editar = false;

  @Output() onPersist = new EventEmitter<void>();

  constructor(private atorService: AtorService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(p => {
        const id = p['id'];
        if (id) {
          this.atorService.get(id).subscribe(res => {
            this.ator = res;
            this.editar = true;
          });
        }
      }
    )
  }

  adicionar(): void {
    if (this.editar) {
      this.atorService.editar(this.ator);
    } else {
      this.atorService.add(this.ator);
    }
    this.onPersist.emit();
    this.router.navigate(['/ator-list']);
  }
}
