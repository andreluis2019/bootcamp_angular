import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmeListComponent } from './filme-list/filme-list.component';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { InativoPipe } from './pipe/inativo.pipe';
import { DubladoPipe } from './pipe/dublado.pipe';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AtorListComponent } from './ator-list/ator-list.component';
import { AtorFormComponent } from './ator-form/ator-form.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { EstudioListComponent } from './estudio-list/estudio-list.component';
import { EstudioFormComponent } from './estudio-form/estudio-form.component';
import { FilmeFormComponent } from './filme-form/filme-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/primeng';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmeListComponent,
    InativoPipe,
    DubladoPipe,
    NavBarComponent,
    AtorListComponent,
    AtorFormComponent,
    EstudioListComponent,
    EstudioFormComponent,
    FilmeFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MultiSelectModule,
    ButtonModule,
    FormsModule,
    RouterModule,
    CalendarModule,
    DropdownModule,
    DialogModule,
    TableModule,
    SliderModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
