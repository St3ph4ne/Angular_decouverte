import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent, NbLoginComponent, NbAuthModule } from '@nebular/auth';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent
      }
    ]
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: 'app' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
    useHash: false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
