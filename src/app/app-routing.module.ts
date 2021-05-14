 import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{AuthGuard} from "./guards/auth.guard"
import{NologinGuard} from "./guards/nologin.guard";
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate : [AuthGuard] 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule),canActivate : [NologinGuard]
  },
  {
    path: 'main-page',
    loadChildren: () => import('./MainPage/main-page.module').then( m => m.MainPageModule)
  },
  { 
    path: 'pacientes', loadChildren: './pacientes/pacientes.module#PacientesPageModule' 
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
