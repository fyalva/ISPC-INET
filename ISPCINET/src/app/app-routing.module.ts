import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginmodalComponent } from './Auth/loginmodal/loginmodal.component';
import { SchoolsComponent } from './Pages/schools/schools.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'escuelas', component: SchoolsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  
  { path: 'iniciar-sesion', component: LoginmodalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
