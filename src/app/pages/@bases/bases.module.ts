import { ApplicationModule } from './../../@application/application.module';
import { BusinessModule } from './../../@application/business/business.module';
import { BusinessWidgetComponent } from './../../@application/business/business-widget/business-widget.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasesRoutingModule } from './bases-routing.module';
import { NbCardModule } from '@nebular/theme';
import { SandboxAltComponent } from './sandbox-alt/sandbox-alt.component';


@NgModule({
  declarations: [
    SandboxComponent,
    SandboxAltComponent,
  ],
  imports: [
    CommonModule,
    BasesRoutingModule,
    NbCardModule,
    ApplicationModule

  ]
})
export class BasesModule { }
