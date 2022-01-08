import { SandboxAltComponent } from './sandbox-alt/sandbox-alt.component';
import { PagesComponent } from './../pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandboxComponent } from './sandbox/sandbox.component';

const routes: Routes = [
  {
    path: 'sandbox',
    component: SandboxComponent
  },
  {
    path: 'sandbox-alt',
    component: SandboxAltComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasesRoutingModule { }
