import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FilmeListComponent} from './filme-list/filme-list.component';
import {AtorListComponent} from './ator-list/ator-list.component';
import {AtorFormComponent} from './ator-form/ator-form.component';
import {EstudioFormComponent} from './estudio-form/estudio-form.component';
import {EstudioListComponent} from './estudio-list/estudio-list.component';
import {FilmeFormComponent} from './filme-form/filme-form.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'filme-list', component: FilmeListComponent,
  },
  {
    path: 'filme-form', component: FilmeFormComponent,
  },
  {
    path: 'ator-list', component: AtorListComponent,
  },
  {
    path: 'ator-form', component: AtorFormComponent,
  },
  {
    path: 'estudio-list', component: EstudioListComponent,
  },
  {
    path: 'estudio-form', component: EstudioFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
