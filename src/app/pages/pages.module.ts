import { BusinessModule } from './../@application/business/business.module';
import { BasesModule } from './@bases/bases.module';
import { ApplicationModule } from './../@application/application.module';
import { ThemeModule } from './../@theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NbLayoutModule, NbMenuModule } from '@nebular/theme';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbMenuModule,
    PagesRoutingModule,
    NbLayoutModule,

  ]
})
export class PagesModule { }
