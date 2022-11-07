import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailComponent } from './detail/detail/detail.component';
import { LoginComponent } from './Login/login/login.component';

const routes: Routes = [

  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path : 'accueil', component: AccueilComponent },
  { path : 'detail/:id', component: DetailComponent },
  { path : 'login', component:  LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
