import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbAuthModule.forRoot({
      strategies:[
        NbPasswordAuthStrategy.setup({
          name: 'email'
        })
      ]
    }),
  ],
  exports:[
    NbAuthModule
  ]
})
export class CoreModule { }
