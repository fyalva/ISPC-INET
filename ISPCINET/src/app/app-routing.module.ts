import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegistroComponent } from './Auth/registro/registro.component';
import { SchoolsComponent } from './Pages/schools/schools.component';

const routes: Routes = [ 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'escuelas', component: SchoolsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
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


