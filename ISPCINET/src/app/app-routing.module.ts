import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { SchoolsComponent } from './Pages/schools/schools.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'escuelas', component: SchoolsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  
  { path: 'iniciar-sesion', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
