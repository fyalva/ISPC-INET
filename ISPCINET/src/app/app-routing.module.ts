import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegistroComponent } from './Auth/registro/registro.component';

const routes: Routes = [ 
  {path: '', redirectTo:'/inicio', pathMatch:'full'},
  {path: 'inicio', component: DashboardComponent},
  {path: 'iniciar-sesion', component: LoginComponent},
  { path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


