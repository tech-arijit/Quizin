import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {
    path: 'pages',
    loadChildren: ()=>import('./pages/pages.module').then(m=> m.PagesModule)
  },
  {
    path: 'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m=> m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
