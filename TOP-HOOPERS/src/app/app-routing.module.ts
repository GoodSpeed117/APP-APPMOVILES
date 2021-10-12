import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tablas',
    loadChildren: () => import('./tablas/tablas.module').then( m => m.TablasPageModule)
  },
  {
    path: 'seguir-equipo',
    loadChildren: () => import('./seguir-equipo/seguir-equipo.module').then( m => m.SeguirEquipoPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'warriors',
    loadChildren: () => import('./warriors/warriors.module').then( m => m.WarriorsPageModule)
  },
  {
    path: 'jugadores',
    loadChildren: () => import('./jugadores/jugadores.module').then( m => m.JugadoresPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'adeudos',
    loadChildren: () => import('./adeudos/adeudos.module').then( m => m.AdeudosPageModule)
  },
  {
    path: 'tabla-a',
    loadChildren: () => import('./tabla-a/tabla-a.module').then( m => m.TablaAPageModule)
  },
  {
    path: 'tabla-b',
    loadChildren: () => import('./tabla-b/tabla-b.module').then( m => m.TablaBPageModule)
  },
  {
    path: 'tabla-c',
    loadChildren: () => import('./tabla-c/tabla-c.module').then( m => m.TablaCPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
